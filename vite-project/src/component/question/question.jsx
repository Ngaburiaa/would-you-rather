import React, { useState } from "react";

const Questions = ({ data }) => {
  const [count, setcount] = useState(0);
  const [percentage, setPercentage] = useState({
    A: null,
    B: null,
  });
  const [disabled, setDisabled] = useState(false);

  const updateData = async (newData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/updatequestions/${data[count].id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: newData }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Update successful:", result);
      } else {
        console.error("Update failed:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function changecount(event) {
      setDisabled(true);

    if (event.target.name === "A") {
      updateData({
        votesA: data[count].votesA + 1,
        percentA:
          ((data[count].votesA + 1) /
            (data[count].votesA + data[count].votesB + 1)) *
          100,
        percentB:
          (data[count].votesB / (data[count].votesA + data[count].votesB + 1)) *
          100,
      });

      setPercentage({
        A: `${(
          ((data[count].votesA + 1) /
            (data[count].votesA + data[count].votesB + 1)) *
          100
        ).toFixed(0)}%`,
        B: `${(
          (data[count].votesB / (data[count].votesA + data[count].votesB + 1)) *
          100
        ).toFixed(0)}%`,
      });
    } else {
      updateData({
        votesB: data[count].votesB + 1,
        percentB:
          ((data[count].votesB + 1) /
            (data[count].votesA + data[count].votesB + 1)) *
          100,
        percentA:
          (data[count].votesA / (data[count].votesA + data[count].votesB + 1)) *
          100,
      });

      setPercentage({
        A: `${(
          (data[count].votesA / (data[count].votesA + data[count].votesB + 1)) *
          100
        ).toFixed(0)}%`,
        B: `${(
          ((data[count].votesB + 1) /
            (data[count].votesA + data[count].votesB + 1)) *
          100
        ).toFixed(0)}%`,
      });
    }

    setTimeout(() => {
      if (data.length - 1 > count) {
        setcount(count + 1);
      } else {
        setcount(0);
      }
      setPercentage({
        A: null,
        B: null,
      });
      setDisabled(false);

    }, 2000);
  }

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button disabled={disabled} name="A" onClick={changecount}>
        {data[count].fieldA}
      </button>
      <label>{percentage.A}</label>
      <button disabled={disabled} name="B" onClick={changecount}>
        {data[count].fieldB}
      </button>{" "}
      <label>{percentage.B}</label>
    </>
  );
};

export default Questions;
