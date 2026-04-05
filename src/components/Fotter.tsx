interface FooterProps {
  body: string;
}

export const Footer: React.FC<FooterProps> = ({ body }) => {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center" }}>
      <div style={{ fontSize: "14px" }}>{body}</div>
    </footer>
  );
};
