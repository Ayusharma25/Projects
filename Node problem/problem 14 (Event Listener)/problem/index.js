import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update progress with calories burned
    this.progress += exercise.caloriesBurned;

    console.log(`Exercise added: ${exercise.name}, Calories burned: ${exercise.caloriesBurned}`);
    console.log(`Total progress: ${this.progress}/${this.goal}`);

    // Emit 'goalReached' event if the progress reaches or exceeds the goal
    if (this.progress >= this.goal) {
      this.emit("goalReached");
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Define listener for the 'goalReached' event
  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal! Great job!");
  });

  // Simulate adding exercises
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
