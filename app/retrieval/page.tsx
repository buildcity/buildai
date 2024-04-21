import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        DOC Retrival
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          
          <span className="ml-2">
            This Document Retrival works in 5 steps
            
           
          </span>
        </li>
        <li className="hidden text-l md:block">
          
      
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, copy and paste your data and click upload.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Second, Ask a question about your document
              </span>
            </li>
            <li className="ml-4">
            3️⃣
              <span className="ml-2">
                Third, it stores your document
              </span>
            </li>
            <li className="ml-4">
            4️⃣
              <span className="ml-2">
                Fourth, it returns a response and the relevant lines from the document
              </span>
            </li>
          </ul>
        </li>
        
        
        
        
        
       
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Ask questions about your document'
      }
      
      titleText="DOC Retrival"
    ></ChatWindow>
  );
}
