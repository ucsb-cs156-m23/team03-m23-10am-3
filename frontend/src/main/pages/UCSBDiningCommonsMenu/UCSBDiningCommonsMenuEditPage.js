import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import UCSBDiningCommonsMenuForm from 'main/components/UCSBDiningCommonsMenu/UCSBDiningCommonsMenuForm';
import { Navigate } from 'react-router-dom'
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";

export default function UCSBDiningCommonsMenuEditPage({storybook=false}) {
    let { id } = useParams();

    const { data: ucsbdiningcommonsmenu, _error, _status } =
        useBackend(
            // Stryker disable next-line all : don't test internal caching of React Query
            [`/api/ucsbdiningcommonsmenu?id=${id}`],
            {  // Stryker disable next-line all : GET is the default, so mutating this to "" doesn't introduce a bug
                method: "GET",
                url: `/api/ucsbdiningcommonsmenu`,
                params: {
                    id
                }
            }
        );

    const objectToAxiosPutParams = (ucsbdiningcommonsmenu) => ({
        url: "/api/ucsbdiningcommonsmenu",
        method: "PUT",
        params: {
            id: ucsbdiningcommonsmenu.id,
        },
        data: {
          diningCommonsCode: ucsbdiningcommonsmenu.diningCommonsCode,
          name: ucsbdiningcommonsmenu.name,
          station: ucsbdiningcommonsmenu.station 
        }
    });

    const onSuccess = (ucsbdiningcommonsmenu) => {
        toast(`UCSBDiningCommonsMenu Updated - id: ${ucsbdiningcommonsmenu.id} name: ${ucsbdiningcommonsmenu.name}`);
    }

    const mutation = useBackendMutation(
        objectToAxiosPutParams,
        { onSuccess },
        // Stryker disable next-line all : hard to set up test for caching
        [`/api/ucsbdiningcommonsmenu?id=${id}`]
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
                <h1>Edit UCSBDiningCommonsMenu</h1>
                {
                    ucsbdiningcommonsmenu && <UCSBDiningCommonsMenuForm submitAction={onSubmit} buttonLabel={"Update"} initialContents={ucsbdiningcommonsmenu} />
                }
            </div>
        </BasicLayout>
    )

}