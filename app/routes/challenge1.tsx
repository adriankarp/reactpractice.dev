import Solution1 from "~/solutions/solution1";
import type { Route } from "./+types/home";
import ChallengeLayout from "~/components/challenge-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Build an Accordion component" },
    {
      name: "description",
      content:
        "Solution for the Accordion component challenge on reactpractice.dev",
    },
  ];
}

export default function Challenge() {
  return (
    <ChallengeLayout title="Build an Accordion Component">
      <Solution1 />
    </ChallengeLayout>
  );
}
