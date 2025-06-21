'use client';

import React from 'react'
import { Button } from './button'
import { useState } from 'react'
import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/userAction';

const FollowButton = ({ userId }: { userId: string }) => {

    const [isLoading, setLoading] = useState(false);
    const handleFollow = async () => {
        setLoading(true);
        try {
            await toggleFollow(userId);
            toast.success("Followed successfully");
        } catch (error) {
            toast.error("Failed to follow user");
        } finally {
            setLoading(false);
        }
    }

    return (

        <Button
            variant="secondary"
            className="w-20"
            onClick={handleFollow}
            size={"sm"}
            disabled={isLoading} >
            {isLoading ? <Loader2Icon className='size-4 animate-spin' /> : "Follow"}
        </Button>

    )
}

export default FollowButton