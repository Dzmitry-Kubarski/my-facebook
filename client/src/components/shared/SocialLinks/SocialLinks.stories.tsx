// core
import { Story, Meta } from '@storybook/react/types-6-0'
import { MemoryRouter } from 'react-router-dom';

// component current
import { SocialLinksProps } from './SocialLinks'
import SocialLinks from './SocialLinks'

// container demo

// components
import SocialLink from '../SocialLink/SocialLink';

// icons
import { DiscordIcon, DribbbleIcon, FacebookIcon, GoogleIcon, InstagramIcon, PatreonIcon, TwitterIcon, YoutubeIcon } from '../../../icons'
import { DemoStorybookWrapper } from '../..';

// options
export default {
    title: 'SocialLinks',
    decorators: [
        getStory => <MemoryRouter>{getStory()}</MemoryRouter>,
    ],
    component: SocialLinks,
} as Meta

// show components
const Template: Story<SocialLinksProps> = (args) =>
    <DemoStorybookWrapper>
        <SocialLinks {...args}>

            <SocialLink href='https://www.youtube.com/' social='facebook'>
                <FacebookIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='twitter'>
                <TwitterIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='youtube'>
                <YoutubeIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='instagram'>
                <InstagramIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='patreon'>
                <PatreonIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='discord'>
                <DiscordIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='google'>
                <GoogleIcon />
            </SocialLink>

            <SocialLink href='https://www.youtube.com/' social='dribbble'>
                <DribbbleIcon />
            </SocialLink>

        </SocialLinks>
    </DemoStorybookWrapper>

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = { small: true }
