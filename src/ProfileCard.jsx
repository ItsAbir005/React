import React from "react";

export default function ProfileCard(props) {
  const { name, title, image, description } = props;

  return (
    <div className="profile-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
const styles = {
  card: {
    width: "250px",
    padding: "16px",
    margin: "12px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    fontFamily: "sans-serif",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
};