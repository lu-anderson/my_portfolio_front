function Container({ children }: { children: React.ReactNode }){
  return (
    <div 
      className="
        min-h-screen
        flex flex-col gap-5
        items-center justify-between 
      bg-bg
        px-8 py-5 
      text-text">
      {children}
    </div>
  );
}

export default Container;