import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://literate-space-eureka-5g4465vx4qpw345wq-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => {
        console.log('Workouts data:', data);
        setWorkouts(data);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
