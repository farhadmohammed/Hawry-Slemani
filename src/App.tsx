/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Leaf,
  Share2,
  Check,
  ArrowUpLeft,
  Phone,
  Globe,
} from 'lucide-react';

// Custom TikTok SVG Icon with crisp vector paths
const TikTokIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface SocialLink {
  id: string;
  title: string;
  subtitle: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  iconBg: string;
  hoverBorder: string;
  hoverGlow: string;
  hoverGradient: string;
  accentColor: string;
}

const SPARKLE_PARTICLES = [
  { id: 1, top: '10%', left: '15%', size: 4, duration: '3.2s', delay: '0.2s' },
  { id: 2, top: '18%', left: '84%', size: 5, duration: '4.1s', delay: '1.1s' },
  { id: 3, top: '36%', left: '11%', size: 3, duration: '2.9s', delay: '0.6s' },
  { id: 4, top: '42%', left: '88%', size: 4, duration: '3.7s', delay: '1.4s' },
  { id: 5, top: '64%', left: '14%', size: 5, duration: '4.3s', delay: '0.4s' },
  { id: 6, top: '70%', left: '85%', size: 4, duration: '3.4s', delay: '1.7s' },
  { id: 7, top: '86%', left: '20%', size: 4, duration: '3.9s', delay: '0.8s' },
  { id: 8, top: '88%', left: '78%', size: 3, duration: '3.1s', delay: '1.2s' },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    title: 'ئینستاگرام',
    subtitle: 'نوێترین بەرهەمەکانی کۆزمێتیک و گیایی ببینە',
    handle: '@sivar__store',
    url: 'https://www.instagram.com/sivar__store',
    icon: <Instagram className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-md shadow-pink-500/20',
    hoverBorder: 'hover:border-pink-500/50',
    hoverGlow: 'hover:shadow-[0_8px_25px_-5px_rgba(236,72,153,0.3)]',
    hoverGradient: 'from-pink-500/15 via-purple-500/10 to-amber-500/5',
    accentColor: 'group-hover:text-pink-300',
  },
  {
    id: 'tiktok',
    title: 'تیکتۆک',
    subtitle: 'ڤیدیۆ و ڕێنمایی بەکارهێنانی بەرهەمە سروشتییەکان',
    handle: '@sivar_storee',
    url: 'https://www.tiktok.com/@sivar_storee',
    icon: <TikTokIcon className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-cyan-500 via-slate-900 to-rose-500 shadow-md shadow-cyan-500/20 border border-white/15',
    hoverBorder: 'hover:border-cyan-400/50',
    hoverGlow: 'hover:shadow-[0_8px_25px_-5px_rgba(34,211,238,0.3)]',
    hoverGradient: 'from-cyan-500/15 via-rose-500/10 to-transparent',
    accentColor: 'group-hover:text-cyan-300',
  },
  {
    id: 'whatsapp',
    title: 'واتسئاپ',
    subtitle: 'پەیوەندی ڕاستەوخۆ و داواکردنی بەرهەمەکان',
    handle: '0770 468 7994',
    url: 'https://wa.me/9647704687994',
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-emerald-600 via-green-500 to-teal-400 shadow-md shadow-emerald-500/20',
    hoverBorder: 'hover:border-emerald-400/60',
    hoverGlow: 'hover:shadow-[0_8px_25px_-5px_rgba(16,185,129,0.35)]',
    hoverGradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/5',
    accentColor: 'group-hover:text-emerald-300',
  },
  {
    id: 'main-website',
    title: 'لقی سەرەکی کارگەی HAWRY - زاخۆ',
    subtitle: 'وێبسایتی سەرەکی بڕاندی هەوری',
    handle: 'HAWRY BRAND',
    url: 'https://chapchaplin.github.io/HAWRY-BRAND/',
    icon: <Globe className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-amber-600 via-yellow-500 to-emerald-500 shadow-md shadow-amber-500/20',
    hoverBorder: 'hover:border-amber-400/60',
    hoverGlow: 'hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.35)]',
    hoverGradient: 'from-amber-500/20 via-yellow-500/10 to-emerald-500/5',
    accentColor: 'group-hover:text-amber-300',
  },
];

export default function App() {
  const [logoError, setLogoError] = useState(false);
  const [chaplinLogoError, setChaplinLogoError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HAWRY - کۆزمێتیک و دەرمانی سروشتی و گیایی',
          text: 'بۆ فرۆشتنی cosmetic و دەرمانی سروشتی و گیایی - سلێمانی',
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full bg-[#060d09] text-slate-100 flex flex-col items-center justify-between py-10 px-4 sm:px-6 overflow-hidden select-none"
    >
      {/* 1. Ultra-Lightweight Dark Background with Radial Glowing Orbs & CSS Sparkles (Zero Blur Filter Lag) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Radial vignette base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,78,59,0.35)_0%,_#060d09_60%,_#030705_100%)]" />

        {/* Top Emerald Botanical Glowing Orb (Pure Radial Gradient - No GPU Blur Lag) */}
        <div
          className="absolute -top-36 -right-36 w-[28rem] h-[28rem] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.28) 0%, rgba(16,185,129,0.08) 45%, transparent 70%)',
          }}
        />

        {/* Center-Left Warm Gold Glowing Orb (Pure Radial Gradient - No GPU Blur Lag) */}
        <div
          className="absolute top-1/4 -left-36 w-[26rem] h-[26rem] rounded-full opacity-55"
          style={{
            background:
              'radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.06) 45%, transparent 70%)',
          }}
        />

        {/* Bottom Teal / Herbal Glowing Orb (Pure Radial Gradient - No GPU Blur Lag) */}
        <div
          className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] rounded-full opacity-55"
          style={{
            background:
              'radial-gradient(circle, rgba(20,184,166,0.22) 0%, rgba(20,184,166,0.06) 45%, transparent 70%)',
          }}
        />

        {/* Hardware-Accelerated Twinkling Sparkles */}
        {SPARKLE_PARTICLES.map((sp) => (
          <span
            key={sp.id}
            style={
              {
                top: sp.top,
                left: sp.left,
                width: sp.size,
                height: sp.size,
                '--twinkle-duration': sp.duration,
                '--twinkle-delay': sp.delay,
              } as React.CSSProperties
            }
            className="absolute rounded-full bg-emerald-300 animate-twinkle"
          />
        ))}
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Top Utility Bar (Share button & subtle nature indicator) */}
        <div className="w-full flex items-center justify-between mb-4 px-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#091912] border border-emerald-500/25 text-emerald-300 text-xs font-medium">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>١٠٠٪ سروشتی و گیایی</span>
          </div>

          <button
            onClick={handleShare}
            type="button"
            aria-label="هاوبەشکردنی پەڕە"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0c1a13] hover:bg-emerald-950 border border-white/10 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-200 text-xs transition-colors duration-150 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">کۆپی کرا</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>هاوبەشکردن</span>
              </>
            )}
          </button>
        </div>

        {/* 3. Main Circular Logo with Smooth Hardware-Accelerated Floating Animation */}
        <div className="relative mt-2 mb-6 flex items-center justify-center">
          {/* Soft static radial aura behind logo (no blur filter cost) */}
          <div
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(245,158,11,0.32) 0%, rgba(16,185,129,0.15) 50%, transparent 72%)',
            }}
          />

          {/* Continuous Floating Logo Container */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.35)] animate-float-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#08130d] flex items-center justify-center relative">
              {!logoError ? (
                <img
                  src="https://i.ibb.co/0yQZFQcg/2708fc7f-3187-4ab7-81ec-37ec3a51149d.png"
                  alt="HAWRY Logo"
                   width={144}
                  height={144}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-cover rounded-full transform-gpu [filter:brightness(0)_invert(82%)_sepia(68%)_saturate(700%)_hue-rotate(354deg)]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2 bg-gradient-to-b from-emerald-900/60 to-emerald-950 w-full h-full">
                  <Leaf className="w-9 h-9 text-emerald-300 mb-1" />
                  <span className="font-brand font-bold text-lg tracking-wider text-emerald-100">
                    HAWRY
                  </span>
                </div>
              )}
            </div>

            {/* Decorative Sparkle Badge on Corner of Logo */}
            <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-1.5 shadow-md border border-emerald-200/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* 4. Business Name in Large Font & Gradient Text */}
        <h1 className="font-brand text-4xl sm:text-5xl font-extrabold tracking-wider text-center bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
          HAWRY
        </h1>

        {/* Business Description / Category */}
        <p className="mt-2.5 text-base sm:text-lg font-medium text-emerald-100/90 text-center max-w-xs sm:max-w-sm leading-relaxed">
          <span>بۆ فرۆشتنی cosmetic و دەرمانی سروشتی و گیایی</span>
          <span className="block mt-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            ( نوێنەری کارگەی هەوری لە سلێمانی )
          </span>
        </p>

        {/* 5. Address as a Small Badge under the name with MapPin Icon */}
        <div className="mt-3.5 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1912] border border-emerald-400/25 shadow-sm">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-200 font-medium">
              سلێمانی - گەڕەکی شێخ محێدین
            </span>
          </div>
        </div>

        {/* 6. Links Section - Fast, Responsive Card Style */}
        <div className="w-full space-y-3.5">
          {SOCIAL_LINKS.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className={`group relative block w-full rounded-2xl p-4 bg-[#0b1611] border border-white/10 ${item.hoverBorder} ${item.hoverGlow} transform-gpu transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] overflow-hidden`}
            >
              {/* Animated Hover Background Gradient Fill */}
              <div
                className={`absolute inset-0 bg-gradient-to-l ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}
              />

              <div className="relative z-10 flex items-center justify-between gap-3.5">
                {/* Right Side (in RTL): Colorful Icon + Text Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg} transform-gpu group-hover:scale-105 transition-transform duration-200`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col text-right min-w-0">
                    <div className="flex items-center flex-wrap gap-2">
                      <span
                        className={`text-base sm:text-lg font-bold text-white ${item.accentColor} transition-colors duration-200`}
                      >
                        {item.title}
                      </span>
                      <span
                        dir="ltr"
                        className="text-xs font-mono text-slate-400 group-hover:text-slate-200 bg-black/40 px-2 py-0.5 rounded-md border border-white/5 transition-colors shrink-0"
                      >
                        {item.handle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-200 truncate mt-0.5 transition-colors duration-200">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Left Side (in RTL): Action Arrow Icon */}
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white transition-all duration-200 group-hover:-translate-x-1">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct Phone Call Quick Strip */}
        <div className="mt-4 w-full flex justify-center">
          <a
            href="tel:07704687994"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300/80 hover:text-emerald-200 py-1.5 px-4 rounded-full hover:bg-emerald-500/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>ژمارەی تەلەفۆن:</span>
            <span dir="ltr" className="font-mono font-semibold tracking-wide">
              0770 468 7994
            </span>
          </a>
        </div>

        {/* 7. Quote Section Below Links with Glowing Top Line */}
        <section className="w-full mt-8 mb-6 flex flex-col items-center text-center">
          {/* Glowing Divider Line Above Quote */}
          <div className="relative w-full flex items-center justify-center mb-5">
            <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
            <div className="absolute px-3 bg-[#060d09] rounded-full border border-emerald-500/30 py-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>
          </div>

          {/* Styled Quote Box */}
          <div className="relative w-full rounded-2xl p-5 bg-[#09150f] border border-emerald-500/20 shadow-md">
            <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-200 via-amber-100 to-emerald-200 bg-clip-text text-transparent leading-relaxed">
              « بەرهەمێکی ناوخۆیی بۆ تەندروستییەکی بەردەوام »
            </p>
          </div>
        </section>
      </main>

      {/* 8. Footer Section - Chaplin Chap Signature with Shimmer, Floating Logo & Pulse/Glow Button */}
      <footer className="relative z-10 w-full max-w-md mx-auto pt-4 pb-2 flex flex-col items-center">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-5" />

        <div className="flex flex-col items-center gap-3.5">
          {/* Shimmer Text + ExternalLink Icon */}
          <a
            href="https://chaplin-chap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-transform duration-200 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-slate-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent animate-shimmer">
              دروستکراوە لە لایەن (چاپلین چاپ)
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-300/80 group-hover:text-amber-200 transition-transform" />
          </a>

          {/* Chaplin Chap Floating Logo + Pulse & Glow Button */}
          <div className="flex items-center gap-3">
            {/* Floating Chaplin Chap Logo */}
            <a
              href="https://chaplin-chap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-400 to-cyan-400 shadow-[0_0_16px_rgba(251,191,36,0.3)] animate-float-small"
              title="Chaplin Chap"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {!chaplinLogoError ? (
                  <img
                    src="https://i.ibb.co/CpGRgn76/chaplin.jpg"
                    alt="Chaplin Chap Logo"
                    width={44}
                    height={44}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => setChaplinLogoError(true)}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-xs font-bold text-amber-300">CC</span>
                )}
              </div>
            </a>

            {/* "Chaplin Chap" Button with Smooth CSS Pulse & Glow */}
            <a
              href="https://chaplin-chap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white text-xs sm:text-sm font-bold tracking-wider border border-white/25 shadow-[0_0_20px_rgba(16,185,129,0.45)] animate-pulse-glow hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <span>Chaplin Chap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

