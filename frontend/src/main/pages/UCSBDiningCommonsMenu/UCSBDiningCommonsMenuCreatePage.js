import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import UCSBDiningCommonsMenuForm from "main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuForm";
import { Navigate } from 'react-router-dom'
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";

export default function UCSBDiningCommonsMenuCreatePage({storybook=false}) {

  const objectToAxiosParams = (ucsbdiningcommonsmenu) => ({
    url: "/api/ucsbdiningcommonsmenu/post",
    method: "POST",
    params: {
      diningCommonsCode: ucsbdiningcommonsmenu.diningCommonsCode,
      name: ucsbdiningcommonsmenu.name,
      station: ucsbdiningcommonsmenu.station 
    }
  });

  const onSuccess = (ucsbDiningCommonsMenu) => {
    toast(`New UCSBDiningCommonsMenu Created - id: ${ucsbDiningCommonsMenu.id} name: ${ucsbDiningCommonsMenu.name}`);
  }

  const mutation = useBackendMutation(
    objectToAxiosParams,
     { onSuccess }, 
     // Stryker disable next-line all : hard to set up test for caching
     ["/api/ucsbdiningcommonsmenu/all"] // mutation makes this key stale so that pages relying on it reload
     );

  const { isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data);
  }

  if (isSuccess && !storybook) {
    return <Navigate to="/ucsbdiningcommonsmenu" />
  }

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Create New UCSBDiningCommonMenuItem</h1>
        <UCSBDiningCommonsMenuForm submitAction={onSubmit} />
      </div>
    </BasicLayout>
  )
}
