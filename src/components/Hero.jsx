import React, { useState, useEffect, useRef } from "react";
import {
  Calculator,
  Upload,
  FileText,
  Scale,
  CheckCircle,
  Clock,
  Euro,
  Plane,
  MessageCircle,
  Bell,
  Globe,
  Shield,
  BarChart3,
  Camera,
  Bot,
  Users,
  Award,
  TrendingUp,
  Zap,
  Brain,
  Languages,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  MapPin,
  AlertCircle,
  Check,
  X,
  ChevronRight,
  Star,
  Briefcase,
  Phone,
  Mail,
} from "lucide-react";

// AI Chat Component
const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI Case Worker. I can help you with flight compensation claims, document verification, and eligibility checks. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: getAIResponse(inputMessage),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes("compensation") || input.includes("eligible")) {
      return "Based on EU Regulation 261/2004, you may be entitled to up to €600 compensation per passenger for flight delays over 3 hours or cancellations. Let me check your specific case - could you provide your flight details?";
    } else if (input.includes("documents") || input.includes("upload")) {
      return "For your claim, I'll need: 1) Boarding passes, 2) Flight confirmation, 3) Any delay/cancellation notices. I can help verify these documents once uploaded. Would you like to start the upload process?";
    } else if (input.includes("status") || input.includes("progress")) {
      return "I can check your claim status in real-time. Please provide your case reference number, and I'll give you the latest update on your compensation claim.";
    }
    return "I understand you're asking about flight compensation. I can help with eligibility checks, document verification, claim status updates, and legal guidance. What specific aspect would you like assistance with?";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl transform transition-transform duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">AI Case Worker</h3>
              <p className="text-xs opacity-90">
                Online • Multilingual Support
              </p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ maxHeight: "calc(100vh - 140px)" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about your flight compensation..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600 hover:bg-gray-300">
                Check eligibility
              </button>
              <button className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600 hover:bg-gray-300">
                Upload documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compensation Calculator
const CompensationCalculator = () => {
  const [flightDetails, setFlightDetails] = useState({
    flightNumber: "",
    departureDate: "",
    from: "",
    to: "",
    delayHours: "",
    distance: "",
  });
  const [compensation, setCompensation] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateCompensation = () => {
    const delay = parseInt(flightDetails.delayHours);
    const distance = parseInt(flightDetails.distance);

    let amount = 0;
    if (delay >= 3) {
      if (distance <= 1500) amount = 250;
      else if (distance <= 3500) amount = 400;
      else amount = 600;
    }

    setCompensation(amount);
    setShowResult(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Compensation Calculator
          </h3>
          <p className="text-gray-600">Check your eligibility for up to €600</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Flight Number
          </label>
          <input
            type="text"
            value={flightDetails.flightNumber}
            onChange={(e) =>
              setFlightDetails({
                ...flightDetails,
                flightNumber: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., LH123"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Departure Date
          </label>
          <input
            type="date"
            value={flightDetails.departureDate}
            onChange={(e) =>
              setFlightDetails({
                ...flightDetails,
                departureDate: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <input
            type="text"
            value={flightDetails.from}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, from: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Departure city"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <input
            type="text"
            value={flightDetails.to}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, to: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Arrival city"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delay (Hours)
          </label>
          <select
            value={flightDetails.delayHours}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, delayHours: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select delay</option>
            <option value="0">No delay</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4+ hours</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Distance (km)
          </label>
          <select
            value={flightDetails.distance}
            onChange={(e) =>
              setFlightDetails({ ...flightDetails, distance: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select distance</option>
            <option value="1000">Under 1,500 km</option>
            <option value="2500">1,500 - 3,500 km</option>
            <option value="4000">Over 3,500 km</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateCompensation}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
      >
        Calculate My Compensation
      </button>

      {showResult && (
        <div
          className={`mt-6 p-4 rounded-lg ${
            compensation > 0
              ? "bg-green-50 border border-green-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          <div className="flex items-center gap-3">
            {compensation > 0 ? (
              <CheckCircle className="w-8 h-8 text-green-600" />
            ) : (
              <X className="w-8 h-8 text-red-600" />
            )}
            <div>
              {compensation > 0 ? (
                <div>
                  <h4 className="text-lg font-bold text-green-800">
                    You're Eligible!
                  </h4>
                  <p className="text-green-700">
                    Potential compensation:{" "}
                    <span className="font-bold text-2xl">€{compensation}</span>
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-red-800">
                    Not Eligible
                  </h4>
                  <p className="text-red-700">
                    Based on the provided information, this flight doesn't
                    qualify for compensation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// User Dashboard
const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("claims");

  const claims = [
    {
      id: "RC001",
      flight: "LH123",
      date: "2024-01-15",
      status: "in_progress",
      amount: "€400",
      progress: 65,
    },
    {
      id: "RC002",
      flight: "BA456",
      date: "2024-01-10",
      status: "completed",
      amount: "€250",
      progress: 100,
    },
    {
      id: "RC003",
      flight: "AF789",
      date: "2024-01-05",
      status: "review",
      amount: "€600",
      progress: 30,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in_progress":
        return "text-blue-600 bg-blue-100";
      case "review":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in_progress":
        return "In Progress";
      case "review":
        return "Under Review";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {[
            { id: "claims", name: "My Claims", icon: FileText },
            { id: "documents", name: "Documents", icon: Upload },
            { id: "notifications", name: "Notifications", icon: Bell },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === "claims" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">My Claims</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                New Claim
              </button>
            </div>

            <div className="space-y-4">
              {claims.map((claim) => (
                <div
                  key={claim.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Flight {claim.flight}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Claim ID: {claim.id}
                      </p>
                      <p className="text-sm text-gray-600">{claim.date}</p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          claim.status
                        )}`}
                      >
                        {getStatusText(claim.status)}
                      </div>
                      <p className="text-lg font-bold text-gray-800 mt-1">
                        {claim.amount}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{claim.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${claim.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Document Management
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-700 mb-2">
                Upload Documents
              </h4>
              <p className="text-gray-500 mb-4">
                Drag and drop files here, or click to browse
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Choose Files
              </button>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Required Documents:
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Boarding passes
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  Flight confirmation email
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  Delay/cancellation notification
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Notifications
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Claim RC001 Updated",
                  message: "Your claim is now under legal review",
                  time: "2 hours ago",
                  type: "info",
                },
                {
                  title: "Document Required",
                  message: "Please upload boarding pass for flight LH123",
                  time: "1 day ago",
                  type: "warning",
                },
                {
                  title: "Compensation Received",
                  message: "€250 has been transferred to your account",
                  time: "3 days ago",
                  type: "success",
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    notification.type === "success"
                      ? "bg-green-50 border-green-400"
                      : notification.type === "warning"
                      ? "bg-yellow-50 border-yellow-400"
                      : "bg-blue-50 border-blue-400"
                  }`}
                >
                  <h4 className="font-semibold text-gray-800">
                    {notification.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function RefundBookingSystem() {
  const [currentView, setCurrentView] = useState("home");
  const [showAIChat, setShowAIChat] = useState(false);

  const navigation = [
    { id: "home", name: "Home", icon: Plane },
    { id: "calculator", name: "Calculator", icon: Calculator },
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "about", name: "About", icon: Shield },
  ];

  const features = [
    {
      icon: Bot,
      title: "AI Case Worker",
      description:
        "Instant assistance with claim eligibility, document verification, and personalized guidance in multiple languages.",
    },
    {
      icon: Euro,
      title: "Up to €600 Compensation",
      description:
        "Maximum compensation for flight delays, cancellations, and denied boarding under EU261 regulation.",
    },
    {
      icon: Scale,
      title: "Legal Support",
      description:
        "Professional legal representation including court proceedings if necessary. No win, no fee guarantee.",
    },
    {
      icon: Upload,
      title: "Smart Document Processing",
      description:
        "AI-powered document analysis and verification to ensure your claim has all required information.",
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description:
        "Available in all major European languages with AI-powered translation and localization.",
    },
    {
      icon: Shield,
      title: "No Win, No Fee",
      description:
        "Only pay when we successfully recover your compensation. Transparent pricing with no hidden costs.",
    },
  ];

  const stats = [
    { label: "Claims Processed", value: "50,000+", icon: FileText },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Total Recovered", value: "€15M+", icon: Euro },
    { label: "Average Payout", value: "€420", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  RefundBooking
                </h1>
                <p className="text-xs text-gray-600">
                  Flight Compensation Experts
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      currentView === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAIChat(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentView === "home" && (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Get Up To{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  €600
                </span>{" "}
                Flight Compensation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                AI-powered flight compensation claims for delayed, cancelled, or
                overbooked flights across Europe. No win, no fee guarantee with
                professional legal support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentView("calculator")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Calculator className="w-5 h-5" />
                  Check My Eligibility
                </button>
                <button
                  onClick={() => setShowAIChat(true)}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Bot className="w-5 h-5" />
                  Talk to AI Assistant
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-6 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose RefundBooking?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Claim Your Compensation?
              </h3>
              <p className="text-xl opacity-90 mb-6">
                Join thousands of satisfied customers who have recovered their
                flight compensation
              </p>
              <button
                onClick={() => setCurrentView("calculator")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Start My Claim Now
              </button>
            </div>
          </div>
        )}

        {currentView === "calculator" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flight Compensation Calculator
              </h2>
              <p className="text-gray-600">
                Check if you're entitled to compensation under EU Regulation
                261/2004
              </p>
            </div>
            <CompensationCalculator />
          </div>
        )}

        {currentView === "dashboard" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Dashboard
              </h2>
              <p className="text-gray-600">
                Track your claims, manage documents, and stay updated
              </p>
            </div>
            <UserDashboard />
          </div>
        )}

        {currentView === "about" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About RefundBooking
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted partner for flight compensation claims
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We're dedicated to helping passengers across Europe claim
                  their rightful compensation for flight disruptions. Our
                  AI-powered platform combined with legal expertise ensures
                  maximum success rates and customer satisfaction.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate on a strict "No Win, No Fee" basis. You only pay
                  when we successfully recover your compensation. Our
                  transparent fee structure ensures you always know what to
                  expect.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                How It Works
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: 1,
                    title: "Check Eligibility",
                    desc: "Use our AI calculator to check if your flight qualifies",
                    icon: Search,
                  },
                  {
                    step: 2,
                    title: "Submit Claim",
                    desc: "Upload documents and let our AI verify everything",
                    icon: Upload,
                  },
                  {
                    step: 3,
                    title: "Legal Process",
                    desc: "Our legal team handles negotiations with airlines",
                    icon: Scale,
                  },
                  {
                    step: 4,
                    title: "Get Paid",
                    desc: "Receive your compensation directly to your account",
                    icon: Euro,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">RefundBooking</h3>
                  <p className="text-sm text-gray-400">
                    Flight Compensation Experts
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for flight compensation claims across
                Europe. AI-powered efficiency with human expertise.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Flight Delay Claims</li>
                <li>Cancellation Compensation</li>
                <li>Denied Boarding Claims</li>
                <li>Lost Luggage Recovery</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Chat Support</li>
                <li>Legal Assistance</li>
                <li>Document Help</li>
                <li>Claim Tracking</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@refundbooking.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Available in 12+ languages</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} RefundBooking. All rights
              reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat */}
      <AIAssistant isOpen={showAIChat} onClose={() => setShowAIChat(false)} />

      {/* Floating AI Button */}
      {!showAIChat && (
        <button
          onClick={() => setShowAIChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group z-40"
        >
          <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
}
