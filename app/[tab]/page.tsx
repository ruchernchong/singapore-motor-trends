import { ComingSoon } from "@/app/_components/ComingSoon";

export const runtime = "edge";

const TabPage = ({ params }: { params: { tab: string } }) => {
  return <ComingSoon page={params.tab} />;
};

export default TabPage;
