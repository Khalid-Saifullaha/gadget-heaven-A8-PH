import React from "react";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <div className="bg-purple-600">
      <Heading
        title={"Product Details"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
    </div>
  );
};

export default Dashboard;
