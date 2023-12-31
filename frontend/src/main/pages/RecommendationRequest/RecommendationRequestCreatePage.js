import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import RecommendationRequestForm from "main/components/RecommendationRequest/RecommendationRequestForm";
import { Navigate } from 'react-router-dom'
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";

export default function RecommendationRequestCreatePage({storybook=false}) {

  const objectToAxiosParams = (recRequest) => ({
    url: "/api/recommendationrequest/post",
    method: "POST",
    params: {
      requesterEmail: recRequest.requesterEmail,
      professorEmail: recRequest.professorEmail,
      explanation: recRequest.explanation,
      dateRequested: recRequest.dateRequested,
      dateNeeded: recRequest.dateNeeded,
      done: recRequest.done,
    }
  });

  const onSuccess = (recRequest) => {
    toast(`New recRequest Created - id: ${recRequest.id} requesterEmail: ${recRequest.requesterEmail} professorEmail: ${recRequest.professorEmail} explanation: ${recRequest.explanation} dateRequested: ${recRequest.dateRequested} dateNeeded: ${recRequest.dateNeeded} done: ${recRequest.done}`);
  }

  const mutation = useBackendMutation(
    objectToAxiosParams,
     { onSuccess }, 
     // Stryker disable next-line all : hard to set up test for caching
     ["/api/recommendationrequest/all"]
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
        <h1>Create New Recommendation Request</h1>

        <RecommendationRequestForm submitAction={onSubmit} />

      </div>
    </BasicLayout>
  )
}
