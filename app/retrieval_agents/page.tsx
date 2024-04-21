import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Doc Agent
      </h1>
      <ul>
        
        <li className="hidden text-l md:block">
          
          <span className="ml-2">
            This Ai is very simmilar to Doc Retrival, but it does better with meta conversations and stores conversations in memory
          </span>
        </li>
       
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Upload a document and ask a question, or just continiue an earlier conversation"'
      }
      
      titleText="Doc Agent"
    ></ChatWindow>
  );
}
