import RecipieContainer from "./Containers/RecipiesContainer/RecipieContainer/RecipeContainer";
import RecipiesContainer from "./Containers/RecipiesContainer/RecipiesContainer";
import WashlistContainer from "./Containers/WashlistContainer/WashlistContainer";

export const routes = [
  {
    path: "/",
    component: WashlistContainer,
    exact: true
  },
  {
    path: "/recipies",
    component: RecipiesContainer,
    exact: true
  },
  {
    path: "/recipies/:name",
    component: RecipieContainer,
    exact: false
  },
  {
    path: "/washlist",
    component: WashlistContainer,
    exact: true
  }
];
