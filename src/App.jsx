import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={styles.container}>
      <h1>Team Profiles</h1>
      <div style={styles.grid}>
        <ProfileCard
          name="Abir Maity"
          title="Frontend Developer"
          image="https://i.pravatar.cc/150?img=1"
          description="Passionate about building responsive user interfaces."
        />

        <ProfileCard
          name="Sara Johnson"
          title="UI/UX Designer"
          image="https://i.pravatar.cc/150?img=5"
          description="Loves crafting intuitive user experiences."
        />

        <ProfileCard
          name="Alex Carter"
          title="Backend Engineer"
          image="https://i.pravatar.cc/150?img=8"
          description="Enjoys solving complex data problems."
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default App;
