import { LinkButton } from "@/components/LinkButton";
import { BlockLinkButton } from "@/components/BlockLinkButton";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <div className="p-8">
      <Divider>ダッシュボード</Divider>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-9">
        <LinkButton href="https://www.tohtech.ac.jp/info/portal/" imgUrl="file.svg">
          ポータルサイト
        </LinkButton>
        <LinkButton href="https://lms.tohtech.ac.jp/" imgUrl="file.svg">
          WebClass
        </LinkButton>
        <LinkButton href="https://opac.tohtech.ac.jp/drupal/" imgUrl="file.svg">
          図書館
        </LinkButton>
        <LinkButton href="https://booklog.jp/users/libtohtech" imgUrl="file.svg">
          電子図書館
        </LinkButton>
        <LinkButton href="https://print.infcm.tohtech.ac.jp" imgUrl="file.svg">
          学内プリンター
        </LinkButton>
      </div>
      <Divider>学生便覧（2024年度）</Divider>
      <div className="grid gap-2">
        <BlockLinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          建築学部
        </BlockLinkButton>
        <BlockLinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          工学部
        </BlockLinkButton>
        <BlockLinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          ライフデザイン学部
        </BlockLinkButton>
      </div>
    </div>
  );
}
