import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Button,
    useToast,
    FormControl,
    Input,
    Box
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { ChatState } from '../../Context/ChatProvider';
import { useState } from 'react';
import UserBadgeItem from '../UserAvatar/UserBadgeItem';








const UpdateGroupChatModal = ({fetchAgain, setFetchAgain}) => {
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    const [groupChatName, setGroupChatName] = useState();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [renameloading, setRenameloading] = useState(false);
    const toast = useToast();

  const { selectedChat, setSelectedChat, user } = ChatState();

  const handleRemove = ()=> {};
  const handleRename = ()=> {};
  const handleSearch = ()=> {};

  return (
    <>
    <IconButton display={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen} /> 

    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader 
            fontSize="35px"
            fontFamily="Nunito"
            d="flex"
            justifyContent="center">{selectedChat.chatName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody> 
            <Box w="100%" display="flex" flexWrap="wrap" pb={3}>
                {selectedChat.users.map((u) => (
                    <UserBadgeItem
                    key={u._id}
                    user={u}
                    admin={selectedChat.groupAdmin}
                    handleFunction={() => handleRemove(u)}
                    />
                ))}
            </Box>
            <FormControl display="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="teal"
                ml={1}
                isLoading={renameloading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl> 

            <FormControl>
              <Input
                placeholder="Add User to group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>

        </ModalBody>

        <ModalFooter>
        <Button onClick={() => handleRemove(user)} colorScheme="red">
              Leave Group
            </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default UpdateGroupChatModal