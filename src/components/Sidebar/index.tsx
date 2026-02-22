import React from "react";
import SidebarLink from "./SidebarLink";

import FintechSVG from "../../assets/FintechSVG";
import ResumoSVG from "../../assets/icons/resumo.svg?react";
import VendasSVG from "../../assets/icons/vendas.svg?react";
import WebhooksSVG from "../../assets/icons/webhooks.svg?react";
import ConfiguracoesSVG from "../../assets/icons/configuracoes.svg?react";
import ContatoSVG from "../../assets/icons/contato.svg?react";
import SairSVG from "../../assets/icons/sair.svg?react";

const Sidebar = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech" />
      <ul>
        <li>
          <SidebarLink IconSVG={ResumoSVG} href={"/"} label={"Resumo"} />
        </li>
        <li>
          <SidebarLink IconSVG={VendasSVG} href={"/vendas"} label={"Vendas"} />
        </li>
        <li>
          <SidebarLink IconSVG={WebhooksSVG} label={"Webhooks"} />
        </li>
        <li>
          <SidebarLink IconSVG={ConfiguracoesSVG} label={"Configurações"} />
        </li>
        <li>
          <SidebarLink IconSVG={ContatoSVG} label={"Contato"} />
        </li>
        <li>
          <SidebarLink IconSVG={SairSVG} label={"Sair"} />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
