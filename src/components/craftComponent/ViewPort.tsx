import { useEditor } from "@craftjs/core";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  }: any = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const router = useRouter();
  const path = router.pathname.startsWith("/admin") ? true : false;
  console.log({ path }, "path");
  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport relative max-h-full w-full ">
      <div className="page-container flex h-full flex-1 flex-col">
        <div
          className={
            "craftjs-renderer h-full w-full flex-1 overflow-auto pb-8 transition"
          }
          ref={(ref: any) =>
            connectors.select(connectors.hover(ref, null), null)
          }
        >
          <div
            className={`relative  border-2 border-dashed ${
              path ? "!border-boxdark" : "!border-ac-2"
            } mb-2 h-[100vh]  overflow-y-scroll`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
