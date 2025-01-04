export default function ThumbnailPage() {
  const rabbit = `                     /\\    .-" /
                    /  ; .'  .' 
                   :   :/  .'   
                    \\  ;-.'     
       .--""""--..__/     \`.    
     .'           .'    \`o  \\   
    /                    \`   ;  
   :                  \\      :  
 .-;        -.         \`.__.-'  
:  ;          \\     ,   ;       
'._:           ;   :   (        
    \\/  .__    ;    \\   \`-.     
     ;     "-,/_..--"\`-..__)    
     '""--.._;`

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-8">
      <div className="w-[960px] h-[540px] flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <pre className="text-primary font-mono text-[8px] leading-none whitespace-pre">
            {rabbit}
          </pre>
          <h1 className="text-[100px] font-bold text-primary">
            WhiteRabbit
          </h1>
        </div>
      </div>
    </div>
  )
}   