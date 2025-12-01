# n8n-nodes-legnext

![Legnext](https://i.ibb.co/Lzgsg5dY/image.png)

This is an n8n community node that integrates [Legnext AI](https://legnext.ai) into your n8n workflows. Legnext AI is a powerful API service for AI-powered image and video generation using Midjourney models, enabling you to create stunning visuals and dynamic videos directly from your automation workflows.

With the Legnext node, you can generate images from text prompts, create variations, upscale images, blend multiple images together, generate videos, and much more—all through a simple, declarative API interface.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

To install the Legnext node:
1. Go to **Settings** → **Community nodes** in your n8n instance
2. Search for `n8n-nodes-legnext`
3. Click **Install**

## Operations

The Legnext node provides four main resources with comprehensive operations:

### 🖼️ Image Resource
Generate and manipulate images using Midjourney models:
- **Blend** - Blend 2-5 images together seamlessly
- **Describe** - Generate text descriptions and prompts from images
- **Imagine** - Generate a 2x2 image grid from text prompts
- **Outpaint** - Extend images in specified directions
- **Pan** - Extend the image canvas with scale ratio
- **Reroll** - Regenerate images using the same prompt
- **Shorten** - Analyze and shorten prompts to key elements
- **Upscale** - Upscale images from generated grids
- **Variation** - Create variations of selected images with optional remix prompts

### 🎬 Video Resource
Create and enhance dynamic videos:
- **Extend Video** - Extend existing videos with seamless continuation
- **Upscale Video** - Enhance video resolution and quality using AI
- **Video Diffusion** - Generate dynamic videos from text prompts or images

### 📋 Job Resource
Monitor and manage your generation tasks:
- **Get Job** - Retrieve the status and results of any generation job

### 💰 Account Resource
Manage your Legnext account:
- **Get Balance** - Check your account balance and usage

## Credentials

To use the Legnext node, you need to authenticate with your Legnext API key:

1. Create a free account at [Legnext AI](https://legnext.ai)
2. Navigate to your API settings to generate an API key
3. In n8n, add new credentials for **Legnext API**
4. Enter your API key
5. Test the connection to ensure it works

## Usage

### Basic Workflow Example

Here's a simple example of generating an image and upscaling it:

1. **Imagine Operation**: Generate a 2x2 grid of images
   - Resource: `Image`
   - Operation: `Imagine`
   - Text Prompt: `"A beautiful sunset over snow mountains"`

2. **Get Job Operation**: Wait for the job to complete
   - Resource: `Job`
   - Operation: `Get Job`
   - Job ID: `{{ $json.job_id }}`

3. **Upscale Operation**: Upscale your favorite image
   - Resource: `Image`
   - Operation: `Upscale`
   - Job ID: `{{ $json.job_id }}`
   - Image Number: `0` (first image in the grid)

### Webhook Integration

All operations support optional webhook callbacks. Add a callback URL to receive notifications when tasks complete:

```
callback: https://your-webhook-endpoint.com/notify
```

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Legnext API Documentation](https://docs.legnext.ai)
* [Legnext Website](https://legnext.ai)
* [GitHub Repository](https://github.com/legnext-ai/n8n-nodes-legnext)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:
- Open an issue on [GitHub](https://github.com/legnext-ai/n8n-nodes-legnext/issues)
- Contact Legnext support at [Legnext AI](https://legnext.ai)
- Join the n8n community forum for general n8n questions

---

Made with ❤️ by the Legnext team
