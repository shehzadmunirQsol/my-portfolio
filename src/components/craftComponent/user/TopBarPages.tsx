import { useEditor } from "@craftjs/core";

import lz from "lzutf8";
import React, { useEffect, useState } from "react";
import { Toolbox } from "./Toolbox";
import { Box, Button as ChakraButton, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { CustomToast } from "../../globalToast";

import { useRouter } from "next/router";

export const TopbarPages = (props: any) => {
  // const router = useRouter();
  // const path = router.pathname.startsWith('/admin') ? true : false;

  // const { addToast } = CustomToast();
  // const { user } = useSelector((state: RootState) => state.auth);
  // const { webDetails } = useSelector((state: RootState) => state.website);
  // const { cmsPage } = useSelector((state: RootState) => state.adminPage);

  // const [isAdminUpdate, setIsAdminUpdate] = useState(0);

  // const { data: PagesApiData, isFetched } =
  //   trpc.storeWebPage.getSingleWebPage.useQuery<any>(
  //     { id: props?.index },
  //     {
  //       refetchOnWindowFocus: false,
  //       enabled: !props?.isAdmin && user?.id && props?.index ? true : false,
  //     },
  //   );

  // const updateWebPage = trpc.webPage.update.useMutation();

  // const { handleSubmit } = useForm<any>();

  // const { actions, query } = useEditor((state, query) => ({
  //   enabled: state.options.enabled,
  //   canUndo: query.history.canUndo(),
  //   canRedo: query.history.canRedo(),
  // }));

  // // Update Blogs API
  // const PagesUpdate = trpc.storeWebPage.updateSingleWebPage.useMutation({
  //   onSuccess: () => {
  //     console.log('upload successfully');
  //   },
  //   onError(error: any) {
  //     console.log({ error });
  //   },
  // });
  // // useFORM DATA

  // useEffect(() => {
  //   return () => {
  //     setDefaultBlogsPage();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (props?.isAdmin) {
  //     // if (!cmsPage?.page_content) {
  //     //   router.replace('/admin/web-pages');
  //     //   return;
  //     // }
  //     if (isAdminUpdate < 2 && cmsPage?.page_content !== '') {
  //       const json = lz.decompress(
  //         lz.decodeBase64(cmsPage?.page_content as string),
  //       );
  //       actions.deserialize(json);
  //       setIsAdminUpdate((prevState) => prevState + 1);
  //     }
  //   } else {
  //     if (PagesApiData !== undefined && PagesApiData?.page_content !== '') {
  //       if (PagesApiData?.page_content) {
  //         const json = lz.decompress(
  //           lz.decodeBase64(PagesApiData?.page_content),
  //         );
  //         actions.deserialize(json);
  //       }
  //     }
  //   }
  // }, [PagesApiData, isFetched, isAdminUpdate]);

  // async function onSubmit(values) {
  //   if (props?.isAdmin) onAdminSubmit(values);
  //   else onStoreSubmit(values);
  // }

  // async function onStoreSubmit(values: any) {
  //   try {
  //     const json = query.serialize();
  //     const hexData = lz.encodeBase64(lz.compress(json));

  //     const dataPayload: any = {
  //       store_id: user?.id,
  //       domain_name: webDetails?.domain_name,
  //       page_content: hexData,
  //     };
  //     if (props?.index) {
  //       dataPayload.id = props?.index;
  //       const data = await PagesUpdate.mutateAsync({ ...dataPayload });

  //       addToast({
  //         message: `${PagesApiData?.page_name} updated successfully!`,
  //         type: 'success',
  //       });
  //       router.push('/store/website/edit');
  //     }
  //   } catch (error) {
  //     addToast({
  //       message: 'Something went Wrong!',
  //       type: 'error',
  //     });
  //     console.log({ error });
  //   }
  // }
  // async function onAdminSubmit(values: any) {
  //   try {
  //     const json = query.serialize();
  //     const hexData = lz.encodeBase64(lz.compress(json));

  //     const dataPayload: any = {
  //       id: cmsPage?.id,
  //       page_content: hexData,
  //     };
  //     await updateWebPage.mutateAsync({ ...dataPayload });
  //     console.log(cmsPage, 'admin cmsPage');

  //     addToast({
  //       message: `${cmsPage?.page_name} updated successfully!`,
  //       type: 'success',
  //     });
  //     router.push('/admin/web-pages');
  //   } catch (error) {
  //     addToast({
  //       message: 'Something went Wrong!',
  //       type: 'error',
  //     });
  //     console.log({ error });
  //   }
  // }

  // console.log({ isAdminUpdate });

  return (
    <div className="mb-2">
      <form
        className="flex flex-col gap-2 "
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Box className="mb-2 w-full bg-white ">
          <div className="flex w-full flex-col gap-2  p-2">
            <div className=" flex flex-row items-center justify-between gap-2">
              <Toolbox
                modalState={props?.modalState}
                setModalState={props?.setModalState}
                // isAdmin={props?.isAdmin}
              />
              <ChakraButton
                // isLoading={PagesUpdate.isLoading}
                loadingText={`Save Name`}
                type="submit"
                className={` ${
                  // '!bg-boxdark hover:!bg-boxdark'
                  "!bg-ac-2  hover:!bg-ac-2"
                }   text-white`}
              >
                Save
              </ChakraButton>
            </div>
          </div>
        </Box>
        {/* INPUTS */}
      </form>
      <FormLabel>
        Drag & Drop your component here
        <br />
      </FormLabel>
    </div>
  );
};
