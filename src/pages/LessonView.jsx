import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { LESSONS } from '../data/lessons'

import SalesAndRevenue from '../lessons/sales-and-revenue'
import CustomerAcquisition from '../lessons/customer-acquisition'
import CustomerRetention from '../lessons/customer-retention'
import CompetitiveTactics from '../lessons/competitive-tactics'
import ProductTactics from '../lessons/product-tactics'
import Operations from '../lessons/operations'
import Partnerships from '../lessons/partnerships'
import Growth from '../lessons/growth'
import DecisionMaking from '../lessons/decision-making'
import MarketResearch from '../lessons/market-research'
import BusinessPlanning from '../lessons/business-planning'
import ProductDevelopment from '../lessons/product-development'
import SalesTechniques from '../lessons/sales-techniques'
import Negotiation from '../lessons/negotiation'
import FinancialTechniques from '../lessons/financial-techniques'
import Management from '../lessons/management'
import OperationsManagement from '../lessons/operations-management'
import Technology from '../lessons/technology'
import Improvement from '../lessons/improvement'
import BrandMarketing from '../lessons/brand-marketing'
import ContentMarketing from '../lessons/content-marketing'
import VideoMarketing from '../lessons/video-marketing'
import SocialMediaMarketing from '../lessons/social-media-marketing'
import SearchMarketing from '../lessons/search-marketing'
import DirectMarketing from '../lessons/direct-marketing'
import PerformanceMarketing from '../lessons/performance-marketing'
import InfluencerPartnershipMarketing from '../lessons/influencer-partnership-marketing'
import CustomerMarketing from '../lessons/customer-marketing'
import PromotionalStrategies from '../lessons/promotional-strategies'
import BasicPricingModels from '../lessons/basic-pricing-models'
import TieredPricing from '../lessons/tiered-pricing'
import PsychologicalPricing from '../lessons/psychological-pricing'
import PromotionalPricing from '../lessons/promotional-pricing'
import SubscriptionPricing from '../lessons/subscription-pricing'
import AdvancedPricing from '../lessons/advanced-pricing'
import ProductBundles from '../lessons/product-bundles'
import QuantityBundles from '../lessons/quantity-bundles'
import ServicePackages from '../lessons/service-packages'
import ComplementaryBundles from '../lessons/complementary-bundles'
import SubscriptionBundles from '../lessons/subscription-bundles'
import ValuePackages from '../lessons/value-packages'
import PromotionalBundles from '../lessons/promotional-bundles'
import Customization from '../lessons/customization'
import StrategicBundling from '../lessons/strategic-bundling'
import TrustCredibility from '../lessons/trust-credibility'
import Reciprocity from '../lessons/reciprocity'
import ScarcityAvailability from '../lessons/scarcity-availability'
import Urgency from '../lessons/urgency'
import ChoicePsychology from '../lessons/choice-psychology'
import PricePsychology from '../lessons/price-psychology'
import Personalization from '../lessons/personalization'
import EmotionalConnection from '../lessons/emotional-connection'
import ReducingPurchaseAnxiety from '../lessons/reducing-purchase-anxiety'
import Engagement from '../lessons/engagement'
import BrandingPart1 from '../lessons/branding-part-1'
import BrandingPart2 from '../lessons/branding-part-2'
import BrandingPart3 from '../lessons/branding-part-3'
import BrandingPart4 from '../lessons/branding-part-4'
import BrandingPart5 from '../lessons/branding-part-5'
import BrandingPart6 from '../lessons/branding-part-6'
import BusinessPrinciplesPart1 from '../lessons/business-principles-part-1'
import BusinessPrinciplesPart2 from '../lessons/business-principles-part-2'
import BusinessPrinciplesPart3 from '../lessons/business-principles-part-3'
import BusinessPrinciplesPart4 from '../lessons/business-principles-part-4'
import BusinessPrinciplesPart5 from '../lessons/business-principles-part-5'
import DebtConceptsPart1 from '../lessons/debt-concepts-part-1'
import DebtConceptsPart2 from '../lessons/debt-concepts-part-2'
import DebtConceptsPart3 from '../lessons/debt-concepts-part-3'
import DebtConceptsPart4 from '../lessons/debt-concepts-part-4'
import DebtConceptsPart5 from '../lessons/debt-concepts-part-5'
import DebtConceptsPart6 from '../lessons/debt-concepts-part-6'
import CreditConceptsPart1 from '../lessons/credit-concepts-part-1'
import CreditConceptsPart2 from '../lessons/credit-concepts-part-2'
import CreditConceptsPart3 from '../lessons/credit-concepts-part-3'
import CreditConceptsPart4 from '../lessons/credit-concepts-part-4'
import CreditConceptsPart6 from '../lessons/credit-concepts-part-6'
import CreditConceptsPart7 from '../lessons/credit-concepts-part-7'
import SellingStrategiesPart1 from '../lessons/selling-strategies-part-1'
import SellingStrategiesPart2 from '../lessons/selling-strategies-part-2'
import SellingStrategiesPart3 from '../lessons/selling-strategies-part-3'
import SellingStrategiesPart4 from '../lessons/selling-strategies-part-4'
import SellingStrategiesPart5 from '../lessons/selling-strategies-part-5'
import SellingStrategiesPart6 from '../lessons/selling-strategies-part-6'
import TargetMarketPart1 from '../lessons/target-market-part-1'
import TargetMarketPart2 from '../lessons/target-market-part-2'
import TargetMarketPart3 from '../lessons/target-market-part-3'
import TargetMarketPart4 from '../lessons/target-market-part-4'
import TargetMarketPart5 from '../lessons/target-market-part-5'
import GeographicBusinessPart1 from '../lessons/geographic-business-part-1'
import GeographicBusinessPart2 from '../lessons/geographic-business-part-2'
import GeographicBusinessPart3 from '../lessons/geographic-business-part-3'
import GeographicBusinessPart4 from '../lessons/geographic-business-part-4'
import GeographicBusinessPart5 from '../lessons/geographic-business-part-5'
import GeographicBusinessPart6 from '../lessons/geographic-business-part-6'
import GeographicBusinessPart7 from '../lessons/geographic-business-part-7'
import GeographicBusinessPart8 from '../lessons/geographic-business-part-8'
import BuySellPart1 from '../lessons/buy-sell-part-1'
import BuySellPart2 from '../lessons/buy-sell-part-2'
import BuySellPart3 from '../lessons/buy-sell-part-3'
import BuySellPart4 from '../lessons/buy-sell-part-4'
import BuySellPart5 from '../lessons/buy-sell-part-5'
import BuySellPart6 from '../lessons/buy-sell-part-6'
import BuySellPart7 from '../lessons/buy-sell-part-7'
import BuySellPart8 from '../lessons/buy-sell-part-8'
import BuySellPart9 from '../lessons/buy-sell-part-9'
import SupplyDemand from '../lessons/supply-demand'
import PricingCompetition from '../lessons/pricing-competition'
import MarketStructures from '../lessons/market-structures'
import BusinessCycles from '../lessons/business-cycles'
import MoneyFinance from '../lessons/money-finance'
import BusinessCosts from '../lessons/business-costs'
import BusinessCosts2 from '../lessons/business-costs-2'
import TradeInternational from '../lessons/trade-international'
import GovernmentEconomy from '../lessons/government-economy'
import EconomicIndicators from '../lessons/economic-indicators'
import BusinessModel1 from '../lessons/business-model-1'
import BusinessModel2 from '../lessons/business-model-2'
import BusinessModel3 from '../lessons/business-model-3'
import BusinessModel4 from '../lessons/business-model-4'
import BusinessModel5 from '../lessons/business-model-5'
import BusinessModel6 from '../lessons/business-model-6'
import BusinessModel7 from '../lessons/business-model-7'
import BusinessModel8 from '../lessons/business-model-8'
import BusinessModel9 from '../lessons/business-model-9'
import ValueProposition1 from '../lessons/value-proposition-1'
import ValueProposition2 from '../lessons/value-proposition-2'
import ValueProposition3 from '../lessons/value-proposition-3'
import ValueProposition4 from '../lessons/value-proposition-4'
import ValueProposition5 from '../lessons/value-proposition-5'
import ValueProposition6 from '../lessons/value-proposition-6'
import ValueProposition7 from '../lessons/value-proposition-7'
import Revenue1 from '../lessons/revenue-1'
import Revenue2 from '../lessons/revenue-2'
import Revenue3 from '../lessons/revenue-3'
import Revenue4 from '../lessons/revenue-4'
import Revenue5 from '../lessons/revenue-5'
import Revenue6 from '../lessons/revenue-6'
import Profit1 from '../lessons/profit-1'
import Profit2 from '../lessons/profit-2'
import Profit3 from '../lessons/profit-3'
import Profit4 from '../lessons/profit-4'
import Profit5 from '../lessons/profit-5'
import Profit6 from '../lessons/profit-6'
import Profit7 from '../lessons/profit-7'
import Profit8 from '../lessons/profit-8'
import Loss1 from '../lessons/loss-1'
import Loss2 from '../lessons/loss-2'
import Loss3 from '../lessons/loss-3'
import Loss4 from '../lessons/loss-4'
import Loss5 from '../lessons/loss-5'
import Costs1 from '../lessons/costs-1'
import Costs2 from '../lessons/costs-2'
import Costs3 from '../lessons/costs-3'
import Costs4 from '../lessons/costs-4'
import Costs5 from '../lessons/costs-5'
import Costs6 from '../lessons/costs-6'
import Costs7 from '../lessons/costs-7'
import Assets1 from '../lessons/assets-1'
import Assets2 from '../lessons/assets-2'
import Assets3 from '../lessons/assets-3'
import Assets4 from '../lessons/assets-4'
import Assets5 from '../lessons/assets-5'
import Assets6 from '../lessons/assets-6'
import Assets7 from '../lessons/assets-7'
import Liabilities1 from '../lessons/liabilities-1'
import Liabilities2 from '../lessons/liabilities-2'
import Liabilities3 from '../lessons/liabilities-3'
import Liabilities4 from '../lessons/liabilities-4'
import Liabilities5 from '../lessons/liabilities-5'
import Liabilities6 from '../lessons/liabilities-6'
import Liabilities7 from '../lessons/liabilities-7'
import Liabilities8 from '../lessons/liabilities-8'
import Equity1 from '../lessons/equity-1'
import Equity2 from '../lessons/equity-2'
import Equity3 from '../lessons/equity-3'
import Equity4 from '../lessons/equity-4'
import Equity5 from '../lessons/equity-5'
import Equity6 from '../lessons/equity-6'
import Equity7 from '../lessons/equity-7'
import Equity8 from '../lessons/equity-8'
import Cash1 from '../lessons/cash-1'
import Cash2 from '../lessons/cash-2'
import Cash3 from '../lessons/cash-3'
import Cash4 from '../lessons/cash-4'
import Cash5 from '../lessons/cash-5'
import Cash6 from '../lessons/cash-6'
import Cash7 from '../lessons/cash-7'
import Cash8 from '../lessons/cash-8'
import Cash9 from '../lessons/cash-9'
import Roi1 from '../lessons/roi-1'
import Roi2 from '../lessons/roi-2'
import Roi3 from '../lessons/roi-3'
import Roi4 from '../lessons/roi-4'
import Roi5 from '../lessons/roi-5'
import Roi6 from '../lessons/roi-6'
import Roi7 from '../lessons/roi-7'
import Roi8 from '../lessons/roi-8'
import Scalability1 from '../lessons/scalability-1'
import Scalability2 from '../lessons/scalability-2'
import Scalability3 from '../lessons/scalability-3'
import Scalability4 from '../lessons/scalability-4'
import Scalability5 from '../lessons/scalability-5'
import Scalability6 from '../lessons/scalability-6'
import Scalability7 from '../lessons/scalability-7'
import Scalability8 from '../lessons/scalability-8'
import Scalability9 from '../lessons/scalability-9'
import Sustainability1 from '../lessons/sustainability-1'
import Sustainability2 from '../lessons/sustainability-2'
import Sustainability3 from '../lessons/sustainability-3'
import Sustainability4 from '../lessons/sustainability-4'
import Sustainability5 from '../lessons/sustainability-5'
import Sustainability6 from '../lessons/sustainability-6'
import Sustainability7 from '../lessons/sustainability-7'
import CompetitiveAdvantage1 from '../lessons/competitive-advantage-1'
import CompetitiveAdvantage2 from '../lessons/competitive-advantage-2'
import CompetitiveAdvantage3 from '../lessons/competitive-advantage-3'
import CompetitiveAdvantage4 from '../lessons/competitive-advantage-4'
import CompetitiveAdvantage5 from '../lessons/competitive-advantage-5'
import CompetitiveAdvantage6 from '../lessons/competitive-advantage-6'
import CompetitiveAdvantage7 from '../lessons/competitive-advantage-7'
import BusinessLifecycle1 from '../lessons/business-lifecycle-1'
import BusinessLifecycle2 from '../lessons/business-lifecycle-2'
import BusinessLifecycle3 from '../lessons/business-lifecycle-3'
import BusinessLifecycle4 from '../lessons/business-lifecycle-4'
import BusinessLifecycle5 from '../lessons/business-lifecycle-5'
import BusinessLifecycle6 from '../lessons/business-lifecycle-6'
import BusinessLifecycle7 from '../lessons/business-lifecycle-7'
import BusinessLifecycle8 from '../lessons/business-lifecycle-8'
import BusinessLifecycle9 from '../lessons/business-lifecycle-9'
import BusinessLifecycle10 from '../lessons/business-lifecycle-10'
import Stakeholders1 from '../lessons/stakeholders-1'
import Stakeholders2 from '../lessons/stakeholders-2'
import Stakeholders3 from '../lessons/stakeholders-3'
import Stakeholders4 from '../lessons/stakeholders-4'
import Stakeholders5 from '../lessons/stakeholders-5'
import Stakeholders6 from '../lessons/stakeholders-6'
import Stakeholders7 from '../lessons/stakeholders-7'
import Stakeholders8 from '../lessons/stakeholders-8'
import Stakeholders9 from '../lessons/stakeholders-9'
import Networking1 from '../lessons/networking-1'
import Networking2 from '../lessons/networking-2'
import Networking3 from '../lessons/networking-3'
import Networking4 from '../lessons/networking-4'
import Networking5 from '../lessons/networking-5'
import Networking6 from '../lessons/networking-6'
import Networking7 from '../lessons/networking-7'
import Networking8 from '../lessons/networking-8'
import Partnership1 from '../lessons/partnership-1'
import Partnership2 from '../lessons/partnership-2'
import Partnership3 from '../lessons/partnership-3'
import Partnership4 from '../lessons/partnership-4'
import Partnership5 from '../lessons/partnership-5'
import Partnership6 from '../lessons/partnership-6'
import StrategicAlliance1 from '../lessons/strategic-alliance-1'
import StrategicAlliance2 from '../lessons/strategic-alliance-2'
import StrategicAlliance3 from '../lessons/strategic-alliance-3'
import StrategicAlliance4 from '../lessons/strategic-alliance-4'
import StrategicAlliance5 from '../lessons/strategic-alliance-5'
import StrategicAlliance6 from '../lessons/strategic-alliance-6'
import StrategicAlliance7 from '../lessons/strategic-alliance-7'
import JointVenture1 from '../lessons/joint-venture-1'
import JointVenture2 from '../lessons/joint-venture-2'
import JointVenture3 from '../lessons/joint-venture-3'
import JointVenture4 from '../lessons/joint-venture-4'
import JointVenture5 from '../lessons/joint-venture-5'
import JointVenture6 from '../lessons/joint-venture-6'
import JointVenture7 from '../lessons/joint-venture-7'
import Affiliate1 from '../lessons/affiliate-1'
import Affiliate2 from '../lessons/affiliate-2'
import Affiliate3 from '../lessons/affiliate-3'
import Affiliate4 from '../lessons/affiliate-4'
import Affiliate5 from '../lessons/affiliate-5'
import Affiliate6 from '../lessons/affiliate-6'
import Affiliate7 from '../lessons/affiliate-7'
import Affiliate8 from '../lessons/affiliate-8'
import Distributor1 from '../lessons/distributor-1'
import Distributor2 from '../lessons/distributor-2'
import Distributor3 from '../lessons/distributor-3'
import Distributor4 from '../lessons/distributor-4'
import Distributor5 from '../lessons/distributor-5'
import Distributor6 from '../lessons/distributor-6'
import Distributor7 from '../lessons/distributor-7'
import Reseller1 from '../lessons/reseller-1'
import Reseller2 from '../lessons/reseller-2'
import Reseller3 from '../lessons/reseller-3'
import Reseller4 from '../lessons/reseller-4'
import Reseller5 from '../lessons/reseller-5'
import Reseller6 from '../lessons/reseller-6'
import Reseller7 from '../lessons/reseller-7'
import Reseller8 from '../lessons/reseller-8'
import Sponsorship1 from '../lessons/sponsorship-1'
import Sponsorship2 from '../lessons/sponsorship-2'
import Sponsorship3 from '../lessons/sponsorship-3'
import Sponsorship4 from '../lessons/sponsorship-4'
import Sponsorship5 from '../lessons/sponsorship-5'
import Sponsorship6 from '../lessons/sponsorship-6'
import Sponsorship7 from '../lessons/sponsorship-7'
import Sponsorship8 from '../lessons/sponsorship-8'
import Collaboration1 from '../lessons/collaboration-1'
import Collaboration2 from '../lessons/collaboration-2'
import Collaboration3 from '../lessons/collaboration-3'
import Collaboration4 from '../lessons/collaboration-4'
import Collaboration5 from '../lessons/collaboration-5'
import Collaboration6 from '../lessons/collaboration-6'
import Collaboration7 from '../lessons/collaboration-7'
import Collaboration8 from '../lessons/collaboration-8'
import Collaboration9 from '../lessons/collaboration-9'
import Collaboration10 from '../lessons/collaboration-10'
import Referral1 from '../lessons/referral-1'
import Referral2 from '../lessons/referral-2'
import Referral3 from '../lessons/referral-3'
import Referral4 from '../lessons/referral-4'
import Referral5 from '../lessons/referral-5'
import Referral6 from '../lessons/referral-6'
import Referral7 from '../lessons/referral-7'
import Referral8 from '../lessons/referral-8'
import Referral9 from '../lessons/referral-9'
import Referral10 from '../lessons/referral-10'
import B2bRelationship1 from '../lessons/b2b-relationship-1'
import B2bRelationship2 from '../lessons/b2b-relationship-2'
import B2bRelationship3 from '../lessons/b2b-relationship-3'
import B2bRelationship4 from '../lessons/b2b-relationship-4'
import B2bRelationship5 from '../lessons/b2b-relationship-5'
import B2bRelationship6 from '../lessons/b2b-relationship-6'
import B2bRelationship7 from '../lessons/b2b-relationship-7'
import B2bRelationship8 from '../lessons/b2b-relationship-8'
import B2bRelationship9 from '../lessons/b2b-relationship-9'
import B2bRelationship10 from '../lessons/b2b-relationship-10'
import SupplierRelationship1 from '../lessons/supplier-relationship-1'
import SupplierRelationship2 from '../lessons/supplier-relationship-2'
import SupplierRelationship3 from '../lessons/supplier-relationship-3'
import SupplierRelationship4 from '../lessons/supplier-relationship-4'
import SupplierRelationship5 from '../lessons/supplier-relationship-5'
import SupplierRelationship6 from '../lessons/supplier-relationship-6'
import SupplierRelationship7 from '../lessons/supplier-relationship-7'
import SupplierRelationship8 from '../lessons/supplier-relationship-8'
import SupplierRelationship9 from '../lessons/supplier-relationship-9'
import SupplierRelationship10 from '../lessons/supplier-relationship-10'
import BusinessRisk1 from '../lessons/business-risk-1'
import BusinessRisk2 from '../lessons/business-risk-2'
import BusinessRisk3 from '../lessons/business-risk-3'
import BusinessRisk4 from '../lessons/business-risk-4'
import BusinessRisk5 from '../lessons/business-risk-5'
import BusinessRisk6 from '../lessons/business-risk-6'
import BusinessRisk7 from '../lessons/business-risk-7'
import BusinessRisk8 from '../lessons/business-risk-8'
import BusinessRisk9 from '../lessons/business-risk-9'
import BusinessRisk10 from '../lessons/business-risk-10'
import FinancialRisk1 from '../lessons/financial-risk-1'
import OperationalRisk1 from '../lessons/operational-risk-1'
import OperationalRisk2 from '../lessons/operational-risk-2'
import OperationalRisk3 from '../lessons/operational-risk-3'
import OperationalRisk4 from '../lessons/operational-risk-4'
import OperationalRisk5 from '../lessons/operational-risk-5'
import OperationalRisk6 from '../lessons/operational-risk-6'
import OperationalRisk7 from '../lessons/operational-risk-7'
import OperationalRisk8 from '../lessons/operational-risk-8'
import OperationalRisk9 from '../lessons/operational-risk-9'
import OperationalRisk10 from '../lessons/operational-risk-10'
import MarketRisk1 from '../lessons/market-risk-1'
import MarketRisk2 from '../lessons/market-risk-2'
import MarketRisk3 from '../lessons/market-risk-3'
import MarketRisk4 from '../lessons/market-risk-4'
import MarketRisk5 from '../lessons/market-risk-5'
import MarketRisk6 from '../lessons/market-risk-6'
import MarketRisk7 from '../lessons/market-risk-7'
import MarketRisk8 from '../lessons/market-risk-8'
import MarketRisk9 from '../lessons/market-risk-9'
import MarketRisk10 from '../lessons/market-risk-10'
import LegalRisk1 from '../lessons/legal-risk-1'
import LegalRisk2 from '../lessons/legal-risk-2'
import LegalRisk3 from '../lessons/legal-risk-3'
import LegalRisk4 from '../lessons/legal-risk-4'
import LegalRisk5 from '../lessons/legal-risk-5'
import LegalRisk6 from '../lessons/legal-risk-6'
import LegalRisk7 from '../lessons/legal-risk-7'
import LegalRisk8 from '../lessons/legal-risk-8'
import LegalRisk9 from '../lessons/legal-risk-9'
import LegalRisk10 from '../lessons/legal-risk-10'
import ReputationRisk1 from '../lessons/reputation-risk-1'
import ReputationRisk2 from '../lessons/reputation-risk-2'
import ReputationRisk3 from '../lessons/reputation-risk-3'
import ReputationRisk4 from '../lessons/reputation-risk-4'
import ReputationRisk5 from '../lessons/reputation-risk-5'
import ReputationRisk6 from '../lessons/reputation-risk-6'
import ReputationRisk7 from '../lessons/reputation-risk-7'
import ReputationRisk8 from '../lessons/reputation-risk-8'
import ReputationRisk9 from '../lessons/reputation-risk-9'
import ReputationRisk10 from '../lessons/reputation-risk-10'
import SupplyChainRisk1 from '../lessons/supply-chain-risk-1'
import SupplyChainRisk2 from '../lessons/supply-chain-risk-2'
import SupplyChainRisk3 from '../lessons/supply-chain-risk-3'
import SupplyChainRisk4 from '../lessons/supply-chain-risk-4'
import SupplyChainRisk5 from '../lessons/supply-chain-risk-5'
import SupplyChainRisk6 from '../lessons/supply-chain-risk-6'
import SupplyChainRisk7 from '../lessons/supply-chain-risk-7'
import SupplyChainRisk8 from '../lessons/supply-chain-risk-8'
import SupplyChainRisk9 from '../lessons/supply-chain-risk-9'
import SupplyChainRisk10 from '../lessons/supply-chain-risk-10'
import Insurance1 from '../lessons/insurance-1'
import Insurance2 from '../lessons/insurance-2'
import Insurance3 from '../lessons/insurance-3'
import Insurance4 from '../lessons/insurance-4'
import Insurance5 from '../lessons/insurance-5'
import Insurance6 from '../lessons/insurance-6'
import Insurance7 from '../lessons/insurance-7'
import Insurance8 from '../lessons/insurance-8'
import Insurance9 from '../lessons/insurance-9'
import Insurance10 from '../lessons/insurance-10'
import ContingencyPlan1 from '../lessons/contingency-plan-1'
import ContingencyPlan2 from '../lessons/contingency-plan-2'
import ContingencyPlan3 from '../lessons/contingency-plan-3'
import ContingencyPlan4 from '../lessons/contingency-plan-4'
import ContingencyPlan5 from '../lessons/contingency-plan-5'
import ContingencyPlan6 from '../lessons/contingency-plan-6'
import ContingencyPlan7 from '../lessons/contingency-plan-7'
import ContingencyPlan8 from '../lessons/contingency-plan-8'
import ContingencyPlan9 from '../lessons/contingency-plan-9'
import ContingencyPlan10 from '../lessons/contingency-plan-10'
import BusinessContinuity1 from '../lessons/business-continuity-1'
import BusinessContinuity2 from '../lessons/business-continuity-2'
import BusinessContinuity3 from '../lessons/business-continuity-3'
import BusinessContinuity4 from '../lessons/business-continuity-4'
import BusinessContinuity5 from '../lessons/business-continuity-5'
import BusinessContinuity6 from '../lessons/business-continuity-6'
import BusinessContinuity7 from '../lessons/business-continuity-7'
import BusinessContinuity8 from '../lessons/business-continuity-8'
import BusinessContinuity9 from '../lessons/business-continuity-9'
import BusinessContinuity10 from '../lessons/business-continuity-10'
import DisasterRecovery1 from '../lessons/disaster-recovery-1'
import DisasterRecovery2 from '../lessons/disaster-recovery-2'
import DisasterRecovery3 from '../lessons/disaster-recovery-3'
import DisasterRecovery4 from '../lessons/disaster-recovery-4'
import DisasterRecovery5 from '../lessons/disaster-recovery-5'
import DisasterRecovery6 from '../lessons/disaster-recovery-6'
import DisasterRecovery7 from '../lessons/disaster-recovery-7'
import DisasterRecovery8 from '../lessons/disaster-recovery-8'
import DisasterRecovery9 from '../lessons/disaster-recovery-9'
import DisasterRecovery10 from '../lessons/disaster-recovery-10'
import RiskAssessmentMitigation1 from '../lessons/risk-assessment-mitigation-1'
import RiskAssessmentMitigation2 from '../lessons/risk-assessment-mitigation-2'
import RiskAssessmentMitigation3 from '../lessons/risk-assessment-mitigation-3'
import RiskAssessmentMitigation4 from '../lessons/risk-assessment-mitigation-4'
import RiskAssessmentMitigation5 from '../lessons/risk-assessment-mitigation-5'
import RiskAssessmentMitigation6 from '../lessons/risk-assessment-mitigation-6'
import RiskAssessmentMitigation7 from '../lessons/risk-assessment-mitigation-7'
import RiskAssessmentMitigation8 from '../lessons/risk-assessment-mitigation-8'
import RiskAssessmentMitigation9 from '../lessons/risk-assessment-mitigation-9'
import RiskAssessmentMitigation10 from '../lessons/risk-assessment-mitigation-10'

const REGISTRY = {
  'sales-and-revenue': SalesAndRevenue,
  'customer-acquisition': CustomerAcquisition,
  'customer-retention': CustomerRetention,
  'competitive-tactics': CompetitiveTactics,
  'product-tactics': ProductTactics,
  'operations': Operations,
  'partnerships': Partnerships,
  'growth': Growth,
  'decision-making': DecisionMaking,
  'market-research': MarketResearch,
  'business-planning': BusinessPlanning,
  'product-development': ProductDevelopment,
  'sales-techniques': SalesTechniques,
  'negotiation': Negotiation,
  'financial-techniques': FinancialTechniques,
  'management': Management,
  'operations-management': OperationsManagement,
  'technology': Technology,
  'improvement': Improvement,
  'brand-marketing': BrandMarketing,
  'content-marketing': ContentMarketing,
  'video-marketing': VideoMarketing,
  'social-media-marketing': SocialMediaMarketing,
  'search-marketing': SearchMarketing,
  'direct-marketing': DirectMarketing,
  'performance-marketing': PerformanceMarketing,
  'influencer-partnership-marketing': InfluencerPartnershipMarketing,
  'customer-marketing': CustomerMarketing,
  'promotional-strategies': PromotionalStrategies,
  'basic-pricing-models': BasicPricingModels,
  'tiered-pricing': TieredPricing,
  'psychological-pricing': PsychologicalPricing,
  'promotional-pricing': PromotionalPricing,
  'subscription-pricing': SubscriptionPricing,
  'advanced-pricing': AdvancedPricing,
  'product-bundles': ProductBundles,
  'quantity-bundles': QuantityBundles,
  'service-packages': ServicePackages,
  'complementary-bundles': ComplementaryBundles,
  'subscription-bundles': SubscriptionBundles,
  'value-packages': ValuePackages,
  'promotional-bundles': PromotionalBundles,
  'customization': Customization,
  'strategic-bundling': StrategicBundling,
  'trust-credibility': TrustCredibility,
  'reciprocity': Reciprocity,
  'scarcity-availability': ScarcityAvailability,
  'urgency': Urgency,
  'choice-psychology': ChoicePsychology,
  'price-psychology': PricePsychology,
  'personalization': Personalization,
  'emotional-connection': EmotionalConnection,
  'reducing-purchase-anxiety': ReducingPurchaseAnxiety,
  'engagement': Engagement,
  'branding-part-1': BrandingPart1,
  'branding-part-2': BrandingPart2,
  'branding-part-3': BrandingPart3,
  'branding-part-4': BrandingPart4,
  'branding-part-5': BrandingPart5,
  'branding-part-6': BrandingPart6,
  'business-principles-part-1': BusinessPrinciplesPart1,
  'business-principles-part-2': BusinessPrinciplesPart2,
  'business-principles-part-3': BusinessPrinciplesPart3,
  'business-principles-part-4': BusinessPrinciplesPart4,
  'business-principles-part-5': BusinessPrinciplesPart5,
  'debt-concepts-part-1': DebtConceptsPart1,
  'debt-concepts-part-2': DebtConceptsPart2,
  'debt-concepts-part-3': DebtConceptsPart3,
  'debt-concepts-part-4': DebtConceptsPart4,
  'debt-concepts-part-5': DebtConceptsPart5,
  'debt-concepts-part-6': DebtConceptsPart6,
  'credit-concepts-part-1': CreditConceptsPart1,
  'credit-concepts-part-2': CreditConceptsPart2,
  'credit-concepts-part-3': CreditConceptsPart3,
  'credit-concepts-part-4': CreditConceptsPart4,
  'credit-concepts-part-6': CreditConceptsPart6,
  'credit-concepts-part-7': CreditConceptsPart7,
  'selling-strategies-part-1': SellingStrategiesPart1,
  'selling-strategies-part-2': SellingStrategiesPart2,
  'selling-strategies-part-3': SellingStrategiesPart3,
  'selling-strategies-part-4': SellingStrategiesPart4,
  'selling-strategies-part-5': SellingStrategiesPart5,
  'selling-strategies-part-6': SellingStrategiesPart6,
  'target-market-part-1': TargetMarketPart1,
  'target-market-part-2': TargetMarketPart2,
  'target-market-part-3': TargetMarketPart3,
  'target-market-part-4': TargetMarketPart4,
  'target-market-part-5': TargetMarketPart5,
  'geographic-business-part-1': GeographicBusinessPart1,
  'geographic-business-part-2': GeographicBusinessPart2,
  'geographic-business-part-3': GeographicBusinessPart3,
  'geographic-business-part-4': GeographicBusinessPart4,
  'geographic-business-part-5': GeographicBusinessPart5,
  'geographic-business-part-6': GeographicBusinessPart6,
  'geographic-business-part-7': GeographicBusinessPart7,
  'geographic-business-part-8': GeographicBusinessPart8,
  'buy-sell-part-1': BuySellPart1,
  'buy-sell-part-2': BuySellPart2,
  'buy-sell-part-3': BuySellPart3,
  'buy-sell-part-4': BuySellPart4,
  'buy-sell-part-5': BuySellPart5,
  'buy-sell-part-6': BuySellPart6,
  'buy-sell-part-7': BuySellPart7,
  'buy-sell-part-8': BuySellPart8,
  'buy-sell-part-9': BuySellPart9,
  'supply-demand': SupplyDemand,
  'pricing-competition': PricingCompetition,
  'market-structures': MarketStructures,
  'business-cycles': BusinessCycles,
  'money-finance': MoneyFinance,
  'business-costs': BusinessCosts,
  'business-costs-2': BusinessCosts2,
  'trade-international': TradeInternational,
  'government-economy': GovernmentEconomy,
  'economic-indicators': EconomicIndicators,
  'business-model-1': BusinessModel1,
  'business-model-2': BusinessModel2,
  'business-model-3': BusinessModel3,
  'business-model-4': BusinessModel4,
  'business-model-5': BusinessModel5,
  'business-model-6': BusinessModel6,
  'business-model-7': BusinessModel7,
  'business-model-8': BusinessModel8,
  'business-model-9': BusinessModel9,
  'value-proposition-1': ValueProposition1,
  'value-proposition-2': ValueProposition2,
  'value-proposition-3': ValueProposition3,
  'value-proposition-4': ValueProposition4,
  'value-proposition-5': ValueProposition5,
  'value-proposition-6': ValueProposition6,
  'value-proposition-7': ValueProposition7,
  'revenue-1': Revenue1,
  'revenue-2': Revenue2,
  'revenue-3': Revenue3,
  'revenue-4': Revenue4,
  'revenue-5': Revenue5,
  'revenue-6': Revenue6,
  'profit-1': Profit1,
  'profit-2': Profit2,
  'profit-3': Profit3,
  'profit-4': Profit4,
  'profit-5': Profit5,
  'profit-6': Profit6,
  'profit-7': Profit7,
  'profit-8': Profit8,
  'loss-1': Loss1,
  'loss-2': Loss2,
  'loss-3': Loss3,
  'loss-4': Loss4,
  'loss-5': Loss5,
  'costs-1': Costs1,
  'costs-2': Costs2,
  'costs-3': Costs3,
  'costs-4': Costs4,
  'costs-5': Costs5,
  'costs-6': Costs6,
  'costs-7': Costs7,
  'assets-1': Assets1,
  'assets-2': Assets2,
  'assets-3': Assets3,
  'assets-4': Assets4,
  'assets-5': Assets5,
  'assets-6': Assets6,
  'assets-7': Assets7,
  'liabilities-1': Liabilities1,
  'liabilities-2': Liabilities2,
  'liabilities-3': Liabilities3,
  'liabilities-4': Liabilities4,
  'liabilities-5': Liabilities5,
  'liabilities-6': Liabilities6,
  'liabilities-7': Liabilities7,
  'liabilities-8': Liabilities8,
  'equity-1': Equity1,
  'equity-2': Equity2,
  'equity-3': Equity3,
  'equity-4': Equity4,
  'equity-5': Equity5,
  'equity-6': Equity6,
  'equity-7': Equity7,
  'equity-8': Equity8,
  'cash-1': Cash1,
  'cash-2': Cash2,
  'cash-3': Cash3,
  'cash-4': Cash4,
  'cash-5': Cash5,
  'cash-6': Cash6,
  'cash-7': Cash7,
  'cash-8': Cash8,
  'cash-9': Cash9,
  'roi-1': Roi1,
  'roi-2': Roi2,
  'roi-3': Roi3,
  'roi-4': Roi4,
  'roi-5': Roi5,
  'roi-6': Roi6,
  'roi-7': Roi7,
  'roi-8': Roi8,
  'scalability-1': Scalability1,
  'scalability-2': Scalability2,
  'scalability-3': Scalability3,
  'scalability-4': Scalability4,
  'scalability-5': Scalability5,
  'scalability-6': Scalability6,
  'scalability-7': Scalability7,
  'scalability-8': Scalability8,
  'scalability-9': Scalability9,
  'sustainability-1': Sustainability1,
  'sustainability-2': Sustainability2,
  'sustainability-3': Sustainability3,
  'sustainability-4': Sustainability4,
  'sustainability-5': Sustainability5,
  'sustainability-6': Sustainability6,
  'sustainability-7': Sustainability7,
  'competitive-advantage-1': CompetitiveAdvantage1,
  'competitive-advantage-2': CompetitiveAdvantage2,
  'competitive-advantage-3': CompetitiveAdvantage3,
  'competitive-advantage-4': CompetitiveAdvantage4,
  'competitive-advantage-5': CompetitiveAdvantage5,
  'competitive-advantage-6': CompetitiveAdvantage6,
  'competitive-advantage-7': CompetitiveAdvantage7,
  'business-lifecycle-1': BusinessLifecycle1,
  'business-lifecycle-2': BusinessLifecycle2,
  'business-lifecycle-3': BusinessLifecycle3,
  'business-lifecycle-4': BusinessLifecycle4,
  'business-lifecycle-5': BusinessLifecycle5,
  'business-lifecycle-6': BusinessLifecycle6,
  'business-lifecycle-7': BusinessLifecycle7,
  'business-lifecycle-8': BusinessLifecycle8,
  'business-lifecycle-9': BusinessLifecycle9,
  'business-lifecycle-10': BusinessLifecycle10,
  'stakeholders-1': Stakeholders1,
  'stakeholders-2': Stakeholders2,
  'stakeholders-3': Stakeholders3,
  'stakeholders-4': Stakeholders4,
  'stakeholders-5': Stakeholders5,
  'stakeholders-6': Stakeholders6,
  'stakeholders-7': Stakeholders7,
  'stakeholders-8': Stakeholders8,
  'stakeholders-9': Stakeholders9,
  'networking-1': Networking1,
  'networking-2': Networking2,
  'networking-3': Networking3,
  'networking-4': Networking4,
  'networking-5': Networking5,
  'networking-6': Networking6,
  'networking-7': Networking7,
  'networking-8': Networking8,
  'partnership-1': Partnership1,
  'partnership-2': Partnership2,
  'partnership-3': Partnership3,
  'partnership-4': Partnership4,
  'partnership-5': Partnership5,
  'partnership-6': Partnership6,
  'strategic-alliance-1': StrategicAlliance1,
  'strategic-alliance-2': StrategicAlliance2,
  'strategic-alliance-3': StrategicAlliance3,
  'strategic-alliance-4': StrategicAlliance4,
  'strategic-alliance-5': StrategicAlliance5,
  'strategic-alliance-6': StrategicAlliance6,
  'strategic-alliance-7': StrategicAlliance7,
  'joint-venture-1': JointVenture1,
  'joint-venture-2': JointVenture2,
  'joint-venture-3': JointVenture3,
  'joint-venture-4': JointVenture4,
  'joint-venture-5': JointVenture5,
  'joint-venture-6': JointVenture6,
  'joint-venture-7': JointVenture7,
  'affiliate-1': Affiliate1,
  'affiliate-2': Affiliate2,
  'affiliate-3': Affiliate3,
  'affiliate-4': Affiliate4,
  'affiliate-5': Affiliate5,
  'affiliate-6': Affiliate6,
  'affiliate-7': Affiliate7,
  'affiliate-8': Affiliate8,
  'distributor-1': Distributor1,
  'distributor-2': Distributor2,
  'distributor-3': Distributor3,
  'distributor-4': Distributor4,
  'distributor-5': Distributor5,
  'distributor-6': Distributor6,
  'distributor-7': Distributor7,
  'reseller-1': Reseller1,
  'reseller-2': Reseller2,
  'reseller-3': Reseller3,
  'reseller-4': Reseller4,
  'reseller-5': Reseller5,
  'reseller-6': Reseller6,
  'reseller-7': Reseller7,
  'reseller-8': Reseller8,
  'sponsorship-1': Sponsorship1,
  'sponsorship-2': Sponsorship2,
  'sponsorship-3': Sponsorship3,
  'sponsorship-4': Sponsorship4,
  'sponsorship-5': Sponsorship5,
  'sponsorship-6': Sponsorship6,
  'sponsorship-7': Sponsorship7,
  'sponsorship-8': Sponsorship8,
  'collaboration-1': Collaboration1,
  'collaboration-2': Collaboration2,
  'collaboration-3': Collaboration3,
  'collaboration-4': Collaboration4,
  'collaboration-5': Collaboration5,
  'collaboration-6': Collaboration6,
  'collaboration-7': Collaboration7,
  'collaboration-8': Collaboration8,
  'collaboration-9': Collaboration9,
  'collaboration-10': Collaboration10,
  'referral-1': Referral1,
  'referral-2': Referral2,
  'referral-3': Referral3,
  'referral-4': Referral4,
  'referral-5': Referral5,
  'referral-6': Referral6,
  'referral-7': Referral7,
  'referral-8': Referral8,
  'referral-9': Referral9,
  'referral-10': Referral10,
  'b2b-relationship-1': B2bRelationship1,
  'b2b-relationship-2': B2bRelationship2,
  'b2b-relationship-3': B2bRelationship3,
  'b2b-relationship-4': B2bRelationship4,
  'b2b-relationship-5': B2bRelationship5,
  'b2b-relationship-6': B2bRelationship6,
  'b2b-relationship-7': B2bRelationship7,
  'b2b-relationship-8': B2bRelationship8,
  'b2b-relationship-9': B2bRelationship9,
  'b2b-relationship-10': B2bRelationship10,
  'supplier-relationship-1': SupplierRelationship1,
  'supplier-relationship-2': SupplierRelationship2,
  'supplier-relationship-3': SupplierRelationship3,
  'supplier-relationship-4': SupplierRelationship4,
  'supplier-relationship-5': SupplierRelationship5,
  'supplier-relationship-6': SupplierRelationship6,
  'supplier-relationship-7': SupplierRelationship7,
  'supplier-relationship-8': SupplierRelationship8,
  'supplier-relationship-9': SupplierRelationship9,
  'supplier-relationship-10': SupplierRelationship10,
  'business-risk-1': BusinessRisk1,
  'business-risk-2': BusinessRisk2,
  'business-risk-3': BusinessRisk3,
  'business-risk-4': BusinessRisk4,
  'business-risk-5': BusinessRisk5,
  'business-risk-6': BusinessRisk6,
  'business-risk-7': BusinessRisk7,
  'business-risk-8': BusinessRisk8,
  'business-risk-9': BusinessRisk9,
  'business-risk-10': BusinessRisk10,
  'financial-risk-1': FinancialRisk1,
  'operational-risk-1': OperationalRisk1,
  'operational-risk-2': OperationalRisk2,
  'operational-risk-3': OperationalRisk3,
  'operational-risk-4': OperationalRisk4,
  'operational-risk-5': OperationalRisk5,
  'operational-risk-6': OperationalRisk6,
  'operational-risk-7': OperationalRisk7,
  'operational-risk-8': OperationalRisk8,
  'operational-risk-9': OperationalRisk9,
  'operational-risk-10': OperationalRisk10,
  'market-risk-1': MarketRisk1,
  'market-risk-2': MarketRisk2,
  'market-risk-3': MarketRisk3,
  'market-risk-4': MarketRisk4,
  'market-risk-5': MarketRisk5,
  'market-risk-6': MarketRisk6,
  'market-risk-7': MarketRisk7,
  'market-risk-8': MarketRisk8,
  'market-risk-9': MarketRisk9,
  'market-risk-10': MarketRisk10,
  'legal-risk-1': LegalRisk1,
  'legal-risk-2': LegalRisk2,
  'legal-risk-3': LegalRisk3,
  'legal-risk-4': LegalRisk4,
  'legal-risk-5': LegalRisk5,
  'legal-risk-6': LegalRisk6,
  'legal-risk-7': LegalRisk7,
  'legal-risk-8': LegalRisk8,
  'legal-risk-9': LegalRisk9,
  'legal-risk-10': LegalRisk10,
  'reputation-risk-1': ReputationRisk1,
  'reputation-risk-2': ReputationRisk2,
  'reputation-risk-3': ReputationRisk3,
  'reputation-risk-4': ReputationRisk4,
  'reputation-risk-5': ReputationRisk5,
  'reputation-risk-6': ReputationRisk6,
  'reputation-risk-7': ReputationRisk7,
  'reputation-risk-8': ReputationRisk8,
  'reputation-risk-9': ReputationRisk9,
  'reputation-risk-10': ReputationRisk10,
  'supply-chain-risk-1': SupplyChainRisk1,
  'supply-chain-risk-2': SupplyChainRisk2,
  'supply-chain-risk-3': SupplyChainRisk3,
  'supply-chain-risk-4': SupplyChainRisk4,
  'supply-chain-risk-5': SupplyChainRisk5,
  'supply-chain-risk-6': SupplyChainRisk6,
  'supply-chain-risk-7': SupplyChainRisk7,
  'supply-chain-risk-8': SupplyChainRisk8,
  'supply-chain-risk-9': SupplyChainRisk9,
  'supply-chain-risk-10': SupplyChainRisk10,
  'insurance-1': Insurance1,
  'insurance-2': Insurance2,
  'insurance-3': Insurance3,
  'insurance-4': Insurance4,
  'insurance-5': Insurance5,
  'insurance-6': Insurance6,
  'insurance-7': Insurance7,
  'insurance-8': Insurance8,
  'insurance-9': Insurance9,
  'insurance-10': Insurance10,
  'contingency-plan-1': ContingencyPlan1,
  'contingency-plan-2': ContingencyPlan2,
  'contingency-plan-3': ContingencyPlan3,
  'contingency-plan-4': ContingencyPlan4,
  'contingency-plan-5': ContingencyPlan5,
  'contingency-plan-6': ContingencyPlan6,
  'contingency-plan-7': ContingencyPlan7,
  'contingency-plan-8': ContingencyPlan8,
  'contingency-plan-9': ContingencyPlan9,
  'contingency-plan-10': ContingencyPlan10,
  'business-continuity-1': BusinessContinuity1,
  'business-continuity-2': BusinessContinuity2,
  'business-continuity-3': BusinessContinuity3,
  'business-continuity-4': BusinessContinuity4,
  'business-continuity-5': BusinessContinuity5,
  'business-continuity-6': BusinessContinuity6,
  'business-continuity-7': BusinessContinuity7,
  'business-continuity-8': BusinessContinuity8,
  'business-continuity-9': BusinessContinuity9,
  'business-continuity-10': BusinessContinuity10,
  'disaster-recovery-1': DisasterRecovery1,
  'disaster-recovery-2': DisasterRecovery2,
  'disaster-recovery-3': DisasterRecovery3,
  'disaster-recovery-4': DisasterRecovery4,
  'disaster-recovery-5': DisasterRecovery5,
  'disaster-recovery-6': DisasterRecovery6,
  'disaster-recovery-7': DisasterRecovery7,
  'disaster-recovery-8': DisasterRecovery8,
  'disaster-recovery-9': DisasterRecovery9,
  'disaster-recovery-10': DisasterRecovery10,
  'risk-assessment-mitigation-1': RiskAssessmentMitigation1,
  'risk-assessment-mitigation-2': RiskAssessmentMitigation2,
  'risk-assessment-mitigation-3': RiskAssessmentMitigation3,
  'risk-assessment-mitigation-4': RiskAssessmentMitigation4,
  'risk-assessment-mitigation-5': RiskAssessmentMitigation5,
  'risk-assessment-mitigation-6': RiskAssessmentMitigation6,
  'risk-assessment-mitigation-7': RiskAssessmentMitigation7,
  'risk-assessment-mitigation-8': RiskAssessmentMitigation8,
  'risk-assessment-mitigation-9': RiskAssessmentMitigation9,
  'risk-assessment-mitigation-10': RiskAssessmentMitigation10,
}

export default function LessonView() {
  const { slug } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  const exists = LESSONS.some((l) => l.slug === slug)

  useEffect(() => {
    if (!user) navigate('/verify', { replace: true })
    else if (!exists) navigate('/lessons', { replace: true })
  }, [user, exists, navigate])

  if (!user || !exists) return null

  const Component = REGISTRY[slug]
  return <Component />
}
