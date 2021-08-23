import { memo } from 'react';
import {
    Collapse,
    Flex,
    Menu,
    MenuList,
} from '@chakra-ui/react'

import { 
  Button, 
  InputBox, 
  FilterGroup,
  MenuFilterItem
} from './components'

import { 
  AdobeIcon, 
  FigmaIcon, 
  IllustratorIcon, 
  InvisionIcon, 
  PhotoshopIcon,
  SketchIcon,
  UnplashIcon
} from './assets/Icons';

export const Filter = memo(function Filter({ isOpen }) {
  
    return (
        <Collapse in={isOpen} animateOpacity>
          <Flex gridColumnGap="32px" marginBlockStart="32px" direction={{ base: 'column', md: 'row'}}>
              <FilterGroup title="Tags">
                <InputBox />
              </FilterGroup>
              <FilterGroup title="Tags">
                <InputBox placeholder="Enter hex or select" />
              </FilterGroup>
              <FilterGroup title="Made With">
                <Menu>
                  <Button>
                    Made with
                  </Button>
                  <MenuList>
                  <MenuFilterItem color="pink.500">
                    All Apps
                  </MenuFilterItem>
                    <MenuFilterItem icon={<AdobeIcon w="16px" h="16px"/>} >
                        Adobe XD
                    </MenuFilterItem>
                    <MenuFilterItem icon={<FigmaIcon w="16px" h="16px"/>} >
                        Figma
                    </MenuFilterItem>
                    <MenuFilterItem icon={<SketchIcon w="16px" h="16px"/>} >
                        Sketch
                    </MenuFilterItem>
                    <MenuFilterItem icon={<UnplashIcon w="16px" h="16px"/>} >
                        Unplash
                    </MenuFilterItem>
                </MenuList>
                </Menu>
              </FilterGroup>
              <FilterGroup title="Downloads">
                <Menu>
                  <Button>
                    All Shots
                  </Button>
                  <MenuList>
                  <MenuFilterItem color="pink.500">
                    All Post
                  </MenuFilterItem>
                  <MenuFilterItem icon={<IllustratorIcon w="16px" h="16px" />}>
                        Adobe Illustrator
                    </MenuFilterItem>
                    <MenuFilterItem icon={<PhotoshopIcon w="16px" h="16px" />} >
                        Adobe Photoshop
                    </MenuFilterItem>
                    <MenuFilterItem icon={<AdobeIcon w="16px" h="16px"/>} >
                        Adobe XD
                    </MenuFilterItem>
                    <MenuFilterItem icon={<FigmaIcon w="16px" h="16px"/>} >
                        Figma
                    </MenuFilterItem>
                    <MenuFilterItem icon={<InvisionIcon w="16px" h="16px"/>} >
                        Invision Studio
                    </MenuFilterItem>
                    <MenuFilterItem icon={<SketchIcon w="16px" h="16px"/>} >
                        Sketch
                    </MenuFilterItem>
                  </MenuList>
                </Menu>
              </FilterGroup>
          </Flex>
        </Collapse>
    )
  })