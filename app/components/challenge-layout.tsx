import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ChallengeLayout({ title, children }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
