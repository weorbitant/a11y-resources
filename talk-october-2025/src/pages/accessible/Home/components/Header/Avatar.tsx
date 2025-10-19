import avatar from '../../../../../assets/avatar.jpg';

export default function Avatar() {
  return (
    <div className="flex items-center justify-center mb-4">
      <img
        className="border-slate-600 border-2 rounded-full"
        src={avatar}
        width={200}
        height={200}
        alt="ByteMystique IA generated avatar"
      />
    </div>
  );
}
