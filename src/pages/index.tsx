import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="p-8">
      <div className="font-bold">ダッシュボード</div>
      <div className="grid gap-2">
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
        <LinkButton href="" imgUrl="file.svg">
          学内プリンター
        </LinkButton>
      </div>
      <div className="font-bold">学生便覧（2024年度）</div>
      <div className="grid gap-2">
        <LinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          建築学部
        </LinkButton>
        <LinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          工学部
        </LinkButton>
        <LinkButton href="https://www.tohtech.ac.jp/outline/disclosure/condition_R5/document/gakuseibinran2024.pdf" imgUrl="file.svg">
          ライフデザイン学部
        </LinkButton>
      </div>
    </div>
  );
}
