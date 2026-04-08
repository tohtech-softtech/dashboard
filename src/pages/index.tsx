import { LinkButton } from "@/components/LinkButton";
import { BlockLinkButton } from "@/components/BlockLinkButton";
import { Divider } from "@/components/Divider";
import Head from "next/head";
import { HelpButton } from "@/components/HelpButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>ダッシュボード</title>
      </Head>
      <div className="p-8">
        <Divider>ダッシュボード</Divider>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-9">
          <LinkButton href="https://www.tohtech.ac.jp/info/portal/" imgUrl="ph-building-office-duotone.svg">
            ポータルサイト
          </LinkButton>
          <LinkButton href="https://lms.tohtech.ac.jp/" imgUrl="ph-chalkboard-simple-duotone.svg">
            WebClass
          </LinkButton>
          <LinkButton href="https://opac.tohtech.ac.jp/drupal/" imgUrl="ph-books-duotone.svg">
            図書館
          </LinkButton>
          {/* <LinkButton href="https://booklog.jp/users/libtohtech" imgUrl="ph-book-open-duotone.svg"> */}
          <LinkButton href="https://booklog.jp/users/libtohtech" imgUrl="ph-device-tablet-camera-duotone.svg">
            電子図書館
          </LinkButton>
          <LinkButton href="https://print.infcm.tohtech.ac.jp" imgUrl="ph-printer-duotone.svg">
            学内プリンター
          </LinkButton>
          <LinkButton href="https://www.infcm.tohtech.ac.jp" imgUrl="ph-info-duotone.svg">
            情報サービスセンター
          </LinkButton>
          <LinkButton href="/shuttle" imgUrl="ph-bus-duotone.svg">
            シャトルバス
          </LinkButton>
        </div>

        <Divider>学生便覧（2026年度）</Divider>
        <div className="grid gap-2">
          <BlockLinkButton
            href="https://www.tohtech.ac.jp/outline/disclosure/condition_R8/document/gakuseibinran2026.pdf#page=22"
            imgUrl="ph-file-pdf-duotone.svg"
          >
            工学部
          </BlockLinkButton>
          <BlockLinkButton
            href="https://www.tohtech.ac.jp/outline/disclosure/condition_R8/document/gakuseibinran2026.pdf#page=79"
            imgUrl="ph-file-pdf-duotone.svg"
          >
            建築学部
          </BlockLinkButton>
          <BlockLinkButton
            href="https://www.tohtech.ac.jp/outline/disclosure/condition_R8/document/gakuseibinran2026.pdf#page=102"
            imgUrl="ph-file-pdf-duotone.svg"
          >
            ライフデザイン学部
          </BlockLinkButton>
        </div>

        <HelpButton
          imageUrl="ph-question-duotone.svg"
          onClicked={() => {
            const helpModal = document.getElementById("help_modal");
            if (helpModal instanceof HTMLDialogElement) {
              helpModal.showModal();
            }
          }}
        />
      </div>
    </>
  );
}
