import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
         Build AI
      </h1>
      <ul>
        <li className="text-l">
          This app is a simple Proof of Concept designed for use by OAE Project Managers.
          <span className="ml-2">
            
          </span>
        </li>
        <li className="hidden text-l md:block">
          
          <span className="ml-2">
           Use with care.
          </span>
        </li>
        <li>
          
          <span className="ml-2">
            
          </span>
        </li>
        <li className="hidden text-l md:block">
          
          <span className="ml-2">
            
          </span>
        </li>
        <li className="text-l">
          
          <span className="ml-2">
            
            
            
          </span>
        </li>
        <li className="text-l">
          
          <span className="ml-2">
            
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      
      titleText="Build AI"
      placeholder="I am your assistant, ready to help with OAE applications, ask me anything"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
