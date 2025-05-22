## 🧠 Emerging Technology Intelligence Demo (Accenture + Lyzr)

A modular 4-tab AI demo app built to showcase Accenture's CVC Intelligence Platform. This demo simulates how CVC teams can interact with Accenture’s digitized knowledge graph and AI-powered agents to improve investment decision-making.

---

### 🔧 Project Overview

- **Framework**: Built using shadcn/ui + Lyzr agents
- **Tabs**: Modular, scoped agent config per tab
- **Backend**: Simulated data files (JSON), easily swapped
- **Hosting**: Netlify (front), Supabase (optional backend)

---

### 🧩 Tab Structure

#### 1. Discover
**Purpose**: Explore sectors, trends, and technology domains

- Upload or select a corporate strategy
- AI agent recommends emerging sectors and key players
- Visualizes investment heatmap + relevant data sources
- Output: Ranked list of relevant technologies/startups

**Agent**: Discovery Agent (`/agents/discover.json`)

---

#### 2. Analyze
**Purpose**: Deep dive into selected startups or technologies

- Input startup/tech name or choose from Discover output
- Get AI-generated SWOT, team/market summary, past funding
- Scenario modeling: Market risk, growth potential
- Output: AI memo + customizable scorecard

**Agent**: Analyst Agent (`/agents/analyze.json`)

---

#### 3. Strategize
**Purpose**: Portfolio-level planning and what-if analysis

- Drag and drop startups/tech into a mock portfolio
- Get recommendations on diversification, synergy, gaps
- Simulate impact across hypothetical strategic goals
- Output: Dynamic strategy board with AI commentary

**Agent**: Portfolio Planner Agent (`/agents/strategize.json`)

---

#### 4. Validate
**Purpose**: Human-in-the-loop validation + insight generation

- Invite “Expert AI” trained on Accenture’s gold-standard evals
- Ask questions, run comparisons, request scenario walkthroughs
- Toggle between Agent and Expert View
- Output: Expert-grounded report for board/investment committee

**Agent**: Evaluation Agent (`/agents/validate.json`)

---

### 📁 Folder Structure

```

/public
/images
discover.jpg
analyze.jpg
strategize.jpg
validate.jpg
/data
discover\_sample.json
analyze\_sample.json
strategize\_sample.json
validate\_sample.json
/agents
discover.json
analyze.json
strategize.json
validate.json

```

---

### 🔍 Demo Instructions

1. Clone this repo: `git clone https://github.com/your-org/acc-cvc-demo`
2. Open in Bolt.new or Loveable
3. Use `?` icon in each tab to access business value modal (TEEL style)
4. Simulate workflows with drop-in JSON data
5. Customize agent config for client-specific scenarios

---

### 🧠 Suggested Agent Features

- GPT-4o / Claude 3.5 / Bedrock Titan integration
- Confidence scoring + citation to simulated data
- Context memory between tabs
- Toggle between Standard/Premium tier output
- Export report (.pdf/.csv) from any tab

---

### 🏷️ Suggested App Title & Taglines

**App Title**:  
> **"Accenture TechGraph"** or **"CVC Vision by Accenture + Lyzr"**

**Taglines**:
- *“Where Strategy Meets Intelligence.”*
- *“Digitizing Accenture's Expertise for Next-Gen Investment.”*
- *“AI-powered insights. Human-level decisions.”*

---

### ✅ Outcomes This Demo Should Showcase

- Faster research via intelligent assistants
- Strategic alignment across investments
- Modular scenario planning tools
- Confidence in decision-making via expert validation

---

### 📬 Contact

Questions? Reach out to [your-email] or tag @Jeremy on Slack.
```