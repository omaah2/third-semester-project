interface SectionProps {
  paragraph?: string;
  header: string;
  tag: string;
}

export default function Section(props: SectionProps) {
  return (
    <div className="text-center w-1/2 mx-auto">
      <p className="font-bold tracking-widest text-sm text-blue-400 uppercase">
        {props.tag}
      </p>
      <h1 className="font-bold text-2xl capitalize">{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}
