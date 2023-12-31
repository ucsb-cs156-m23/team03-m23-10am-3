import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import RecommendationRequestForm from "main/components/RecommendationRequest/RecommendationRequestForm";
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import { useBackend, useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";

export default function RecommendationRequestEditPage({storybook=false}) {

  let { id } = useParams();

  const { data: recRequest, _error, _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      [`/api/recommendationrequest?id=${id}`],
      {  // Stryker disable next-line all : GET is the default, so changing this to "" doesn't introduce a bug
        method: "GET",
        url: `/api/recommendationrequest`,
        params: {
          id
        }
      }
    );


  const objectToAxiosPutParams = (recRequest) => ({
    url: "/api/recommendationrequest",
    method: "PUT",
    params: {
      id: recRequest.id,
    },
    data: {
      requesterEmail: recRequest.requesterEmail,
      professorEmail: recRequest.professorEmail,
      explanation: recRequest.explanation,
      dateRequested: recRequest.dateRequested,
      dateNeeded: recRequest.dateNeeded,
      done: recRequest.done,
    }
  });

  const onSuccess = (recRequest) => {
    toast(`Recommendation Request Updated - id: ${recRequest.id} requesterEmail: ${recRequest.requesterEmail} professorEmail: ${recRequest.professorEmail} explanation: ${recRequest.explanation} dateRequested: ${recRequest.dateRequested} dateNeeded: ${recRequest.dateNeeded} done: ${recRequest.done}`);
  }

  const mutation = useBackendMutation(
    objectToAxiosPutParams,
    { onSuccess },
    // Stryker disable next-line all : hard to set up test for caching
    [`/api/recommendationrequest?id=${id}`]
  );

  const { isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data);
  }

  if (isSuccess && !storybook) {
    return <Navigate to="/recommendationrequest" />
  }

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Edit Recommendation Request</h1>
        {
          recRequest && <RecommendationRequestForm initialContents={recRequest} submitAction={onSubmit} buttonLabel="Update" />
        }
      </div>
    </BasicLayout>
  )
}
