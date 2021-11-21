import { Flex, Text, Icon, Tooltip, Box } from '@chakra-ui/react';
import React from 'react';

import { RiInformationLine } from 'react-icons/ri';

interface InfosProps {
  info: number;
  title: string;
  tooltip?: boolean;
}

export default function Infos({ info, title, tooltip }: InfosProps) {
  return (
    <Flex
      flexDir="column"
      align={['start', 'center']}
      justify="center"
      flexWrap="wrap"
    >
      <Text
        color="yellow.500"
        fontSize={['24px', '24px', '48px']}
        fontWeight="600"
      >
        {info}
      </Text>

      {tooltip ? (
        <Flex align="center">
          <Text
            fontSize={['16px', '16px', '24px']}
            fontWeight="600"
            color="gray.300"
            align={['start', 'center']}
            mr="8px"
          >
            {title}
          </Text>
          <Tooltip hasArrow label="+ de 100 cidades">
            <Box>
              <Icon
                as={RiInformationLine}
                fontSize={['md', 'md', 'xl']}
                color="gray.200"
              />
            </Box>
          </Tooltip>
        </Flex>
      ) : (
        <Text
          fontSize={['16px', '16px', '24px']}
          fontWeight="600"
          color="gray.300"
          align={['start', 'center']}
        >
          {title}
        </Text>
      )}
    </Flex>
  );
}
