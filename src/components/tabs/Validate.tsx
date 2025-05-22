import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export const Validate: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { 
      role: 'agent', 
      content: 'I can help validate your investment thesis for AI companies. What specific company or aspect would you like me to analyze?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(input);
      setMessages(prev => [...prev, { role: 'agent', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simple AI response simulation
  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('anthropic') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Anthropic, the primary risks to validate include:\n\n1. Competitive Position: OpenAI maintains a significant first-mover advantage with widespread GPT adoption. Anthropic will need to differentiate based on safety and reliability, not just raw capabilities.\n\n2. Business Model Risk: Anthropic\'s current API-based business model faces pricing pressure from open source models and larger competitors who can operate at lower margins.\n\n3. Regulatory Uncertainty: While Anthropic\'s safety-focused approach may be advantageous in a regulated environment, the timing and scope of AI regulation remains unpredictable, creating execution uncertainty.\n\n4. Talent Retention: The company\'s ability to retain key AI researchers in a competitive talent market will be crucial for maintaining its technical edge.\n\nWould you like me to elaborate on any of these risk factors or suggest validation approaches?';
    } else if (lowerMessage.includes('anthropic') && lowerMessage.includes('valuation')) {
      return 'Anthropic\'s current $4.1B valuation reflects strong investor confidence, but requires validation against several benchmarks:\n\n1. Comparable Companies: The valuation represents a ~30x multiple on estimated 2024 revenue, which is high but in-line with leading AI companies. OpenAI\'s recent valuation was ~50x revenue, while Cohere is ~20x.\n\n2. Growth Trajectory: Anthropic is projecting 200-250% YoY growth for the next 3 years. If achieved, the current valuation represents a more reasonable 8-10x multiple on projected 2026 revenue.\n\n3. Strategic Value: Beyond financial metrics, Anthropic has strategic value through its safety-focused approach and technical talent that could justify a premium in acquisition scenarios.\n\n4. Monetization Potential: The company\'s ability to convert its technical advantages into sustainable revenue streams remains unproven but early enterprise adoption signals are positive.\n\nWould you like me to analyze specific aspects of this valuation in more detail?';
    } else if (lowerMessage.includes('anthropic') && lowerMessage.includes('competitive')) {
      return 'Anthropic\'s competitive position can be validated across several dimensions:\n\n1. Technical Capabilities: Claude 3 benchmarks show competitive performance with GPT-4, particularly in reasoning, safety, and instruction-following. However, OpenAI maintains advantages in coding and certain specialized tasks.\n\n2. Safety Differentiation: Anthropic\'s Constitutional AI approach provides meaningful differentiation for enterprise customers with high safety and alignment requirements. This is a legitimate competitive moat if properly monetized.\n\n3. Enterprise Readiness: Early enterprise customers report strong satisfaction with Claude\'s reliability, reduced hallucinations, and longer context windows. These factors support Anthropic\'s ability to compete effectively in the enterprise segment.\n\n4. Market Timing: Anthropic is well-positioned as a strong "second player" in a market that likely won\'t be winner-take-all. Many enterprises specifically seek multi-vendor AI strategies to reduce dependency risks.\n\nWould you like me to elaborate on any specific competitive dimension?';
    } else if (lowerMessage.includes('anthropic') && lowerMessage.includes('team')) {
      return 'Anthropic\'s team represents one of its strongest assets and can be validated through several lenses:\n\n1. Leadership: Founded by Dario Amodei (CEO) and several other former OpenAI researchers, including some who led GPT-3 development. This founding team brings critical technical expertise and credibility.\n\n2. Research Talent: The company has attracted top AI safety researchers from Google, DeepMind, and academia. Their research publication record demonstrates continued thought leadership in alignment and safety.\n\n3. Engineering Execution: The team has demonstrated strong execution by releasing multiple Claude models with competitive capabilities despite having significantly fewer resources than OpenAI or Google.\n\n4. Business Development: Recent executive hires from enterprise software companies strengthen Anthropic\'s ability to commercialize its technology effectively.\n\n5. Culture: The company maintains a research-oriented culture with strong emphasis on safety, which helps attract and retain talent aligned with its mission.\n\nWould you like me to analyze any specific aspect of the team in more detail?';
    } else if (lowerMessage.includes('anthropic')) {
      return 'Anthropic is a leading AI safety company founded in 2021 by former OpenAI researchers. Their flagship product is Claude, a large language model designed with a focus on safety, helpfulness, and harmlessness.\n\nKey investment validation points:\n\n1. Technology: Claude 3 models demonstrate competitive performance with GPT-4 on most benchmarks, with particular strengths in reasoning, instruction-following, and reduced hallucinations.\n\n2. Market Position: Positioned as the leading safety-focused alternative to OpenAI, with strong enterprise adoption including Zoom, Notion, Quora, and DuckDuckGo.\n\n3. Growth: Revenue is growing at 200%+ YoY with strong unit economics as API usage scales.\n\n4. Funding: Well-capitalized with $750M+ raised from Google, Salesforce, and other strategic investors.\n\n5. Differentiation: Constitutional AI approach provides meaningful technical and market differentiation in safety and alignment.\n\nWhat specific aspect of Anthropic would you like me to validate further?';
    } else if (lowerMessage.includes('cohere') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Cohere, the key risks to validate include:\n\n1. Competitive Differentiation: Cohere faces intense competition from both larger players (OpenAI, Anthropic) and open-source alternatives. Their enterprise focus is sound but requires clearer technical differentiation.\n\n2. Go-to-Market Execution: As a smaller player, Cohere\'s ability to scale enterprise sales against well-funded competitors with strong brand recognition presents execution risk.\n\n3. Capital Requirements: Building and training frontier models requires significant ongoing capital. Cohere\'s funding ($435M to date) may be insufficient to keep pace with larger competitors.\n\n4. Talent Retention: While the founding team is strong (ex-Google Brain), retaining top AI talent against competitors with deeper pockets remains challenging.\n\n5. Enterprise Adoption Timeline: Enterprise sales cycles are lengthy, and Cohere\'s runway depends on accelerating adoption.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('cohere')) {
      return 'Cohere is an enterprise-focused AI company founded in 2019 by former Google Brain researchers. They specialize in developing large language models optimized for business applications.\n\nKey investment validation points:\n\n1. Technology: Their Command and Embed models show strong performance for enterprise use cases, particularly in RAG applications and document processing.\n\n2. Enterprise Focus: Clear strategic focus on enterprise applications rather than competing directly in consumer AI.\n\n3. Differentiation: Specialized in multilingual capabilities and connectors for enterprise data systems.\n\n4. Partnerships: Strategic partnership with Oracle provides valuable enterprise distribution channels.\n\n5. Team: Founded by notable NLP researchers from Google Brain with strong technical credentials.\n\nWhat specific aspect of Cohere would you like me to validate further?';
    } else if (lowerMessage.includes('stability ai') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Stability AI, the key risks to validate include:\n\n1. Business Model Uncertainty: Stability has pivoted multiple times, from open-source focus to enterprise products to consumer apps. This suggests strategic uncertainty.\n\n2. Competitive Pressure: In image generation, they face intense competition from Midjourney (superior quality), OpenAI (integration advantages), and open-source alternatives.\n\n3. Governance Concerns: Reports of internal conflicts and leadership issues raise questions about operational execution.\n\n4. Funding Challenges: Recent funding rounds have reportedly come at lower valuations, indicating potential investor concerns.\n\n5. Regulatory Exposure: Their early approach to training on broad internet data without clear opt-out mechanisms creates potential copyright and regulatory exposure.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('stability ai')) {
      return 'Stability AI is a generative AI company founded in 2020, best known for developing Stable Diffusion, an open-source image generation model.\n\nKey investment validation points:\n\n1. Technology: Pioneered open-source high-quality image generation with Stable Diffusion, and has expanded into video, 3D, and audio generation.\n\n2. Distribution: Their open-source approach created massive adoption and developer community, though monetization has proven challenging.\n\n3. Product Portfolio: Has expanded beyond image generation to multimodal models, including Stable Audio and Stable Video.\n\n4. Market Position: Established brand in generative media, but faces intense competition from Midjourney, OpenAI, and others.\n\n5. Enterprise Strategy: Shifting toward enterprise applications and API services for monetization.\n\nWhat specific aspect of Stability AI would you like me to validate further?';
    } else if (lowerMessage.includes('mistral') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Mistral AI, the key risks to validate include:\n\n1. Competitive Dynamics: While Mistral has impressive technical capabilities, they face intense competition from both established players and other well-funded startups in an increasingly crowded market.\n\n2. Open-Source Strategy Tensions: Their hybrid approach of releasing some models as open-source while keeping others proprietary creates potential strategic tensions and community expectations.\n\n3. Monetization Challenges: Converting technical excellence into sustainable revenue streams remains unproven, particularly as model capabilities become increasingly commoditized.\n\n4. Regulatory Environment: As a European AI company, Mistral faces evolving EU AI Act compliance requirements, though their location could also be advantageous for certain customers.\n\n5. Scaling Operations: Rapidly scaling from research excellence to commercial operations presents execution challenges, particularly in enterprise sales and support.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('mistral')) {
      return 'Mistral AI is a French AI company founded in 2023 by former DeepMind and Meta AI researchers. They develop large language models with a focus on efficiency and a hybrid open-source/commercial approach.\n\nKey investment validation points:\n\n1. Technical Efficiency: Mistral models demonstrate impressive performance-to-parameter ratios, achieving near-frontier capabilities with smaller, more efficient models.\n\n2. Team: Founded by recognized AI researchers including Arthur Mensch (CEO), Guillaume Lample, and Timothée Lacroix, bringing experience from Meta AI and DeepMind.\n\n3. Funding: Raised over €385M at a €2B valuation in record time, demonstrating strong investor confidence.\n\n4. European Position: Well-positioned as Europe\'s leading AI model provider, with potential regulatory advantages in EU markets.\n\n5. Open-Source Strategy: Their approach of releasing smaller models as open-source while commercializing larger models creates community goodwill while preserving commercial upside.\n\nWhat specific aspect of Mistral AI would you like me to validate further?';
    } else if (lowerMessage.includes('inflection') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Inflection AI, the key risks to validate include:\n\n1. Product-Market Fit: Pi, their consumer-facing assistant, has not demonstrated clear differentiation or mass adoption despite technical quality. The pivot to Microsoft raises questions about their original B2C strategy.\n\n2. Strategic Direction: The recent acquisition of core team members by Microsoft, while maintaining Inflection as a separate entity, creates uncertainty about the company\'s future direction and independence.\n\n3. Competitive Positioning: Inflection faces intense competition from both larger players (OpenAI, Anthropic) and numerous well-funded startups in an increasingly crowded market.\n\n4. Capital Intensity: Their approach of building proprietary infrastructure and models requires substantial ongoing capital, creating potential funding challenges despite their strong initial raise.\n\n5. Team Continuity: With key technical leaders now at Microsoft, the company\'s ability to maintain technical excellence and execute on its vision may be compromised.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('inflection')) {
      return 'Inflection AI is an AI company founded in 2022 by Reid Hoffman, Mustafa Suleyman (former DeepMind co-founder), and Karen Simonyan. They developed Pi, a personal AI assistant, before a major strategic shift in 2024.\n\nKey investment validation points:\n\n1. Recent Transition: In March 2024, Microsoft hired key Inflection team members including Suleyman and Simonyan, while Inflection continues as a separate entity with a license to its technology.\n\n2. Technology: Their Inflection-2 model demonstrated competitive performance with leading models like GPT-4 and Claude 2.\n\n3. Infrastructure: Built significant AI infrastructure including a large compute cluster with thousands of NVIDIA GPUs.\n\n4. Funding: Raised $1.3B from Microsoft, Nvidia, and other investors at a reported $4B valuation before the Microsoft transition.\n\n5. Strategic Value: Despite organizational changes, the company\'s IP, infrastructure, and remaining team retain significant value.\n\nWhat specific aspect of Inflection AI would you like me to validate further?';
    } else if (lowerMessage.includes('perplexity') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Perplexity AI, the key risks to validate include:\n\n1. Differentiation Sustainability: While Perplexity has created an innovative search experience, the core technology (RAG with LLMs) is becoming increasingly commoditized. Major search engines and startups are rapidly deploying similar capabilities.\n\n2. Content Licensing and Legal Exposure: Their approach of retrieving and summarizing content from across the web creates potential copyright and licensing issues, particularly as publishers become more aggressive about AI content usage.\n\n3. Unit Economics: The cost structure of serving AI-powered search results (requiring multiple API calls to models like GPT-4) creates challenging unit economics that may be difficult to offset with current monetization approaches.\n\n4. Competitive Response: Google, Microsoft, and other search incumbents with vastly more resources are rapidly incorporating similar AI capabilities, potentially limiting Perplexity\'s growth runway.\n\n5. Monetization Challenges: Converting free users to paid subscribers at sufficient scale remains unproven, particularly as free alternatives improve.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('perplexity')) {
      return 'Perplexity AI is a search engine and answer engine founded in 2022 that uses AI to provide direct answers to user queries with cited sources.\n\nKey investment validation points:\n\n1. Product Innovation: Created a new search paradigm that directly answers questions using AI with source attribution, reducing the need to visit multiple websites.\n\n2. Growth: Reported 10M+ monthly active users with strong organic growth and user engagement metrics.\n\n3. Team: Founded by former Quora, Meta, and Databricks employees with strong technical backgrounds.\n\n4. Funding: Raised $73.6M from NEA, Databricks Ventures, and others at a $520M valuation, with a recent round led by IVP at a reported $1B+ valuation.\n\n5. Monetization: Launched Perplexity Pro subscription ($20/month) with access to more powerful models and features.\n\nWhat specific aspect of Perplexity AI would you like me to validate further?';
    } else if (lowerMessage.includes('ai21') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of AI21 Labs, the key risks to validate include:\n\n1. Competitive Positioning: AI21 faces intense competition from both larger players (OpenAI, Anthropic, Google) and well-funded startups with similar enterprise focus (Cohere, Mistral). Their technical differentiation is less clear than some competitors.\n\n2. Model Performance Gap: While Jamba shows improvements over previous AI21 models, independent benchmarks suggest it still lags behind frontier models from OpenAI and Anthropic in several key capabilities.\n\n3. Go-to-Market Execution: As a smaller player, AI21\'s ability to build enterprise sales channels and support infrastructure at scale presents execution risk.\n\n4. Capital Requirements: Continuing to develop competitive foundation models requires substantial ongoing capital. Despite strong funding, AI21 has raised less than several key competitors.\n\n5. Product-Market Fit: Their pivot from consumer applications (Wordtune) toward enterprise API services indicates potential challenges in finding sustainable product-market fit.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('ai21')) {
      return 'AI21 Labs is an AI company founded in 2017 by Yoav Shoham, Ori Goshen, and Amnon Shashua. They develop large language models and AI applications with a focus on enterprise use cases.\n\nKey investment validation points:\n\n1. Technology: Their Jamba model family shows competitive performance for enterprise applications, with particular strengths in reasoning and factuality.\n\n2. Enterprise Focus: Clear strategic focus on enterprise applications and domain-specific solutions rather than competing directly in consumer AI.\n\n3. Team: Founded by renowned AI researchers and entrepreneurs with strong technical and business backgrounds.\n\n4. Funding: Raised over $300M from investors including Nvidia, Google, and Salesforce at a reported $1.4B valuation.\n\n5. Product Portfolio: Expanded beyond foundation models to specialized solutions like Wordtune (writing assistant) and enterprise-specific implementations.\n\nWhat specific aspect of AI21 Labs would you like me to validate further?';
    } else if (lowerMessage.includes('runway') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Runway, the key risks to validate include:\n\n1. Competitive Intensity: The generative video space is becoming increasingly crowded with both startups (Pika, Stability) and large companies (OpenAI, Google, Meta) releasing competitive products with massive resources.\n\n2. Compute Economics: Generative video is extremely compute-intensive, creating challenging unit economics that may be difficult to support with current pricing models, particularly as usage scales.\n\n3. Enterprise Adoption Timeline: While creative professionals are embracing the technology, broader enterprise adoption may take longer than anticipated, affecting growth projections.\n\n4. Copyright and Legal Exposure: Training on video datasets creates potential copyright issues, particularly as legal precedents around generative AI and copyright continue to evolve.\n\n5. Monetization Strategy: Current pricing models may face pressure as competitors enter the market and capabilities become more commoditized.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('runway')) {
      return 'Runway is an AI company founded in 2018 that specializes in generative AI tools for video creation, editing, and visual effects.\n\nKey investment validation points:\n\n1. Product Innovation: Pioneered accessible generative video with Gen-1 and Gen-2, establishing early leadership in a rapidly growing category.\n\n2. Creator Adoption: Strong traction among creative professionals, with usage by major studios, production companies, and independent creators.\n\n3. Team: Founded by Cristóbal Valenzuela, Anastasis Germanidis, and Alejandro Matamala, combining technical expertise with creative industry understanding.\n\n4. Funding: Raised $237M from NVIDIA, Salesforce Ventures, and others at a reported $1.5B+ valuation.\n\n5. Business Model: Established SaaS subscription model with tiered pricing that has demonstrated strong conversion from free to paid users.\n\nWhat specific aspect of Runway would you like me to validate further?';
    } else if (lowerMessage.includes('hugging face') && (lowerMessage.includes('risk') || lowerMessage.includes('concern'))) {
      return 'Based on my analysis of Hugging Face, the key risks to validate include:\n\n1. Monetization Challenges: Their open-source foundation and community focus creates tension with monetization needs. Enterprise revenue growth must accelerate to justify the $4.5B valuation.\n\n2. Strategic Focus: The company operates across multiple domains (model hosting, enterprise solutions, research, community platform) which may dilute focus and execution.\n\n3. Competitive Pressure: Cloud providers are increasingly offering similar model hosting and deployment services with deeper integration into their ecosystems.\n\n4. Talent Retention: As a hub for AI talent, retaining key technical staff amid aggressive recruiting from larger companies presents an ongoing challenge.\n\n5. Open-Source Dynamics: While open-source is their strength, it also means many of their innovations can be freely adopted by competitors, potentially limiting defensibility.\n\nWould you like me to elaborate on any of these risk factors?';
    } else if (lowerMessage.includes('hugging face')) {
      return 'Hugging Face is an AI company founded in 2016 that has evolved from a chatbot startup into the leading platform for open-source AI models, tools, and datasets.\n\nKey investment validation points:\n\n1. Platform Dominance: Established as the "GitHub of machine learning" with over 350,000 models and 30,000+ organizations using their platform.\n\n2. Community Leadership: Built the largest AI open-source community with millions of monthly users and strong developer loyalty.\n\n3. Enterprise Traction: Enterprise offering has gained significant traction with customers including Amazon, Google, Microsoft, and numerous Fortune 500 companies.\n\n4. Team: Founded by Clément Delangue, Julien Chaumond, and Thomas Wolf, combining technical expertise with community-building skills.\n\n5. Funding: Raised $235M from investors including Salesforce, Amazon, Google, and Nvidia at a reported $4.5B valuation.\n\nWhat specific aspect of Hugging Face would you like me to validate further?';
    } else {
      return 'I can help validate investment theses for various AI companies. You can ask me about specific companies like Anthropic, Cohere, Stability AI, Mistral AI, Inflection AI, Perplexity, AI21 Labs, Runway, or Hugging Face.\n\nFor each company, I can provide insights on:\n- Overall investment validation points\n- Specific risk factors and concerns\n- Competitive positioning\n- Team assessment\n- Valuation considerations\n\nWhich company or aspect would you like me to analyze?';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Validate</h2>
        <p className="text-gray-600">
          Validate investment theses with AI-powered analysis of competitive positioning, market dynamics, and risk factors.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.role === 'user' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </motion.div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex space-x-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about AI companies, valuations, risks, or competitive positioning..."
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
              rows={2}
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className={`p-2 rounded-md ${
                !input.trim() || isTyping
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors duration-150 flex items-center justify-center`}
            >
              {isTyping ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};