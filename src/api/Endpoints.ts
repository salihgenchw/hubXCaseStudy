import BaseUrl from "./BaseUrl";

interface EndpointsMap {
  GET_QUESTIONS: string;
  GET_CATEGORIES: string;
}

const Endpoints: EndpointsMap = {
  GET_QUESTIONS: BaseUrl + "/getQuestions",
  GET_CATEGORIES: BaseUrl + "/getCategories",
};

export default Endpoints;
