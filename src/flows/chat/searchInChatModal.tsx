import React from "react";
import styled from "@emotion/styled";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
`;

const SearchResult = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const HighlightedText = styled.span`
  background-color: yellow;
  font-weight: bold;
`;

export const SearchInChatModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  searchResults: {
    chatId: string;
    messageId: string;
    content: string;
    sender: string;
    recipient: string;
  }[];
  onResultClick: (chatId: string, messageId: string) => void;
  searchQuery: string;
}> = ({ isOpen, onClose, searchResults, onResultClick, searchQuery }) => {
  if (!isOpen) return null;

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <HighlightedText key={index}>{part}</HighlightedText>
      ) : (
        part
      )
    );
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Search Results</h2>
        {searchResults.map((result) => (
          <SearchResult
            key={`${result.chatId}-${result.messageId}`}
            onClick={() => onResultClick(result.chatId, result.messageId)}
          >
            {highlightText(result.content, searchQuery)}
            <div>
              <small>
                from {result.sender} to {result.recipient}
              </small>
            </div>
          </SearchResult>
        ))}
      </ModalContent>
    </Modal>
  );
};
