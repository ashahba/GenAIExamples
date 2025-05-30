//  Copyright (C) 2024 Intel Corporation
//  SPDX-License-Identifier: Apache-2.0

export enum MessageRole {
	Assistant,
	User,
}

export enum MessageType {
	Text,
	SingleAudio,
	AudioList,
	SingleImage,
	ImageList,
	singleVideo,
}

type Map<T> = T extends MessageType.Text | MessageType.SingleAudio
	? string
	: T extends MessageType.AudioList
		? string[]
		: T extends MessageType.SingleImage
			? { imgSrc: string; imgId: string }
			: { imgSrc: string; imgId: string }[];

export interface Message {
	role: MessageRole;
	type: MessageType;
	content: Map<Message["type"]>;
	time: number;
}

export enum LOCAL_STORAGE_KEY {
	STORAGE_CHAT_KEY = "chatMessages",
	STORAGE_TIME_KEY = "initTime",
}
