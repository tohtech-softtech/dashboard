import Image from "next/image";

interface HelpButtonProps {
  imageUrl: string;
  onClicked: () => void;
}

export const HelpButton: React.FC<HelpButtonProps> = ({ imageUrl, onClicked }) => {
  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
      <div className="fab" onClick={onClicked}>
        <Image src={imageUrl} alt="" width={48} height={48} />
      </div>
      <HelpModal />
    </div>
  );
};

const HelpModal: React.FC = () => {
  return (
    <dialog id="help_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
        </form>
        <h2 className="text-lg font-bold">ダッシュボードについて</h2>
        <p>このダッシュボードは大学のポータルサイトや各種サービスに簡単にアクセスできるサイトです。</p>
        <br />
        <h3 className="text-lg font-bold">注意事項</h3>
        <p>リンク切れやシャトルバス時刻表の情報が正確でない場合があります。ご注意ください。</p>
        <br />
        <h3 className="text-lg font-bold">制作</h3>
        <a href="https://softtechtohtech.work/" target="_blank" rel="noopener noreferrer">
          ソフトウェア技術研究会
        </a>
      </div>
    </dialog>
  );
};
