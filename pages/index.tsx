import { useState } from 'react';
import { Button, Htag, Ptag, Tag } from '../components';
import { Rating } from '../components/Rating/Rating';

export default function Home(): JSX.Element {
    const [currentRating, setCurrentRating] = useState<number>(0);

    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>
                Button
            </Button>
            <Button appearance='ghost' arrow='down'>
                Button
            </Button>
            <Ptag size='s'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi corrupti animi veniam dignissimos expedita inventore
                autem cumque placeat quam, magni, est quibusdam quaerat eum
                tempora nihil dolorum quia voluptatem officiis!
            </Ptag>
            <Ptag size='m'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi corrupti animi veniam dignissimos expedita inventore
                autem cumque placeat quam, magni, est quibusdam quaerat eum
                tempora nihil dolorum quia voluptatem officiis!
            </Ptag>
            <Ptag size='l'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi corrupti animi veniam dignissimos expedita inventore
                autem cumque placeat quam, magni, est quibusdam quaerat eum
                tempora nihil dolorum quia voluptatem officiis!
            </Ptag>
            <Tag size='s' color='red'>
                Hello!
            </Tag>
            <Rating currentRating={3} />
            <Rating
                currentRating={currentRating}
                setCurrentRating={setCurrentRating}
                isEditable
            />
        </>
    );
}
