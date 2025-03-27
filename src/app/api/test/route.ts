import { NextResponse } from 'next/server';
import * as  canvas from 'canvas';
import * as  path from 'path';
import * as  tf from '@tensorflow/tfjs-node';
import * as faceapi from '@vladmandic/face-api/dist/face-api.node.js';

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({
    Canvas: canvas.Canvas as any,
    Image: canvas.Image as any,
    ImageData: canvas.ImageData as any
  });

export async function GET() {
    const MODEL_URL = path.join(__dirname, '/models');
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.nets.ageGenderNet.loadFromDisk(MODEL_URL);
  return NextResponse.json({ message: 'Hi Next.js!' });
}
