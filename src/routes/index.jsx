import Layout from "../layout/Layout";
import Category from "../pages/Category";
import DescribeIssue from "../pages/DescribeIssue";
import Home from "../pages/Home";
import ThankYou from "../pages/ThankYou";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "describe-issue",
        element: <DescribeIssue />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
    ],
  },
];
