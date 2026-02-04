import useDocumentMetadata from '../../hooks/useDocumentMetadata';

const MetaManager = ({ mode }) => {
  const isSolutions = mode === 'solutions';
  
  const title = isSolutions 
    ? "Technical Solutions & Systems Logic | Emil William" 
    : "Emil William | Frontend Engineer & UI/UX Specialist";
    
  const description = isSolutions
    ? "Specializing in system reliability, financial data integrity (IEEE 754), and multi-tenant security architecture."
    : "Building premium, high-fidelity user interfaces with 1:1 design-to-code parity.";

  useDocumentMetadata(title, description);

  return null;
};

export default MetaManager;
