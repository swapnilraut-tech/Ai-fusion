'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import React from 'react'
import AiMultiModels from './AiMultiModels';

const ChatInputBox = () => {
  return (
    <div className=''>
      <AiMultiModels />
      <div
        className="w-full min-h-[80vh] flex justify-center px-4 items-end"
      >
        <div className="w-full  border inset-0 rounded-xl shadow-md max-w-2xl p-4">
          <Input
            type={"text"}
            placeholder="Ask me anything..."
            className={
              "border-0 outline-none border-none outline-0 focus:ring-0"
            }
          />
          <div className='mt-4 w-full flex justify-between items-center gap-3'>
            <Button className={''} variant='ghost' size='icon-sm'>
                <Paperclip  className='h-5
                w-5'/>
            </Button>
            <div>
                <Button variant='ghost' size='icon-sm'>
                    <Mic />
                </Button>
                <Button size='icon-sm'>
                    <Send />
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox
