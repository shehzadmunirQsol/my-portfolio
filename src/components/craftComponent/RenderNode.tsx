import { useNode, useEditor } from "@craftjs/core";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));
  const router = useRouter();
  const path = router.pathname.startsWith("/admin") ? true : false;

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  }: any = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.name,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef: any = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      ?.querySelector(".craftjs-renderer")
      ?.addEventListener("scroll", scroll);

    return () => {
      document
        ?.querySelector(".craftjs-renderer")
        ?.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {isActive ? (
        ReactDOM.createPortal(
          <div
            ref={currentRef}
            className={` rounded-t-md px-2 py-2  text-white ${
              path ? "!bg-boxdark" : "!bg-ac-1"
            }   fixed  -mt-11  ml-auto  flex items-center justify-center  text-center text-sm`}
            style={{
              left: getPos(dom).left,
              top: getPos(dom).top,
              zIndex: 100,
            }}
          >
            <h2 className="mr-2 flex-1">{name}</h2>
            {deletable ? (
              <div
                className="cursor-pointer"
                onMouseDown={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  actions.delete(id);
                }}
              >
                <i className={` fas fa-remove text-lg `}></i>
              </div>
            ) : (
              <></>
            )}
          </div>,
          document.querySelector(".page-container") as any
        )
      ) : (
        <></>
      )}
      <>{render}</>
    </>
  );
};
