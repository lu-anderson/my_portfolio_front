type Paragraph = {
  text: string,
  type: string,
  bold?: boolean
};

type Content = {
  type: string,
  children: Paragraph[]
}[];

type RenderFunction = (children: any) => JSX.Element[];

function RichText({ content }: { content: Content }) {

  const blocks: Record<string, RenderFunction> = {
    paragraph: renderParagraphs
  };

  function renderParagraphs(children: Paragraph[]) {
    return children.map(({ text, bold }, index: number) => {
      if (bold) {
        return <p key={index}><strong>{text}</strong></p>;
      }
      return <p key={index}>{text}</p>;
    });
  }

  return (
    <>
      {content.map(({ type, children }, index) => {
        return blocks[type](children);
      })}
    </>
  );
}

export default RichText;