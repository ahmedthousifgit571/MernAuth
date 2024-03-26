import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinners";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <section className="heading">
        <h1>Welcom {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </div>
  );
}

export default Dashboard;
