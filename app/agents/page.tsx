import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        OAE Agent
      </h1>
      <ul>
       
        <li>
          
          <span className="ml-2">
            This Agent holds your conversations in memory and has access to a search engine and a calculator.
          </span>
        </li>
        
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I am your OAE agent, ask me about anything. I can even do some math for you!"
      titleText="Build AI"
      
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
