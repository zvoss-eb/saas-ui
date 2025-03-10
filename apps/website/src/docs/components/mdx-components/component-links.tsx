import React from 'react'
import {
  Icon,
  Text,
  HStack,
  Wrap,
  Link,
  useColorModeValue,
  LinkProps,
  WrapItem,
} from '@chakra-ui/react'
import { FaNpm, FaGithub, FaYoutube } from 'react-icons/fa'
import StorybookIcon from '../storybook-icon'
import { t } from '@/docs/utils/i18n'

type ComponentLinkProps = LinkProps & {
  icon: React.ElementType
  url: string
  iconSize?: string
  iconColor?: string
}

function ComponentLink(props: ComponentLinkProps) {
  const { icon, url, children, iconSize, iconColor, ...rest } = props
  return (
    <Link
      href={url}
      isExternal
      px="12px"
      display="flex"
      alignItems="center"
      minH="32px"
      borderWidth="1px"
      borderRadius="md"
      color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      _hover={{
        color: useColorModeValue('gray.700', 'whiteAlpha.900'),
        boxShadow: 'sm',
        transform: 'translateY(-1px)',
      }}
      {...rest}
    >
      <HStack>
        <Icon fontSize={iconSize} as={icon} color={iconColor} />
        <Text fontSize="sm" lineHeight="short">
          {children}
        </Text>
      </HStack>
    </Link>
  )
}

export type ComponentLinksProps = {
  theme?: { componentName: string; theme?: string }
  github?: { url?: string; package?: string }
  npm?: { package: string }
  storybook?: { url: string }
  video?: { url: string }
}
function ComponentLinks(props: ComponentLinksProps) {
  const { theme, github, npm, storybook, video, ...rest } = props
  const iconColor = useColorModeValue('gray.600', 'inherit')

  const githubRepoUrl = 'https://github.com/saas-js/saas-ui'

  const githubLink = (github?.url || github?.package) && (
    <WrapItem>
      <ComponentLink
        url={
          github.url || `${githubRepoUrl}/tree/main/packages/${github.package}`
        }
        icon={FaGithub}
        iconColor={iconColor}
        iconSize="1rem"
      >
        {t('component.mdx-components.component-links.view-source')}
      </ComponentLink>
    </WrapItem>
  )

  const npmLink = npm?.package && (
    <WrapItem>
      <ComponentLink
        url={`https://www.npmjs.com/package/${npm.package}`}
        icon={FaNpm}
        iconSize="2rem"
        iconColor="red.500"
      >
        {npm.package}
      </ComponentLink>
    </WrapItem>
  )

  const storybookLink = storybook?.url && (
    <WrapItem>
      <ComponentLink
        url={storybook.url}
        icon={StorybookIcon}
        iconSize="1.25rem"
        iconColor="pink.500"
      >
        {t('component.mdx-components.component-links.view-storybook')}
      </ComponentLink>
    </WrapItem>
  )

  const videoLink = video?.url && (
    <WrapItem>
      <ComponentLink
        url={video.url}
        icon={FaYoutube}
        iconSize="1.2rem"
        iconColor="red.500"
      >
        {t('component.mdx-components.component-links.view-video')}
      </ComponentLink>
    </WrapItem>
  )

  const themeComponentLink = theme && (
    <WrapItem>
      <ComponentLink
        url={`${githubRepoUrl}/tree/main/packages/saas-ui-theme/src/${
          theme.theme || 'base'
        }/components/${theme.componentName}.ts`}
        icon={FaGithub}
        iconColor={iconColor}
        iconSize="1rem"
      >
        {t('component.mdx-components.component-links.view-theme-source')}
      </ComponentLink>
    </WrapItem>
  )

  return (
    <Wrap className="component-links" mt="2rem" spacing="4" {...rest}>
      {githubLink}
      {themeComponentLink}
      {npmLink}
      {storybookLink}
      {videoLink}
    </Wrap>
  )
}

export default ComponentLinks
