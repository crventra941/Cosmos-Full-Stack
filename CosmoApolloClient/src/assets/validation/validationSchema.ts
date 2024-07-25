export const imageSchema = {
    type: 'object',
    properties: {
      height: { type: 'integer', minimum: 10 },
      width: { type: 'integer', minimum: 10 },
      isYoung: { type: 'boolean'},
      isGrayScale: { type: 'boolean'},
    },
    required: ['height', 'width'],
    additionalProperties: false, 
  } as const;
  
  export interface FormData {
    width: number;
    height: number;
    isYoung?: boolean;
    isGrayScale?: boolean ;
  }
  